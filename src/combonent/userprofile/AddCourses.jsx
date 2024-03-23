import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../Axios/interceptor";
import { useDropzone } from "react-dropzone";
import ProgressBar from "@ramonak/react-progress-bar";
import Multiselect from "multiselect-react-dropdown";
import { AuthContext } from "../context/AxiosProvider";
import style from "./AddLessons.module.css"; 



function AddCourses() {
  const { UserID } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const [Video, setVideo] = useState(null);
  const [selectedVideoName, setSelectedVideoName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const [categories, setCategories] = useState([]);

  const [tags, setTags] = useState([
    "programming",
    "backend",
    "Frontend",
    "Data Analysis",
    "graphic design",
    "Motion",
    "Business",
    "sale",
    "UX/Ui",
    "Sensors",
    "Ai",
    "product management",
  ]);
  const [selectedTags, setSelectedTags] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("http://localhost:4000/category/all")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const onDropVideo = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setVideo(acceptedFiles[0]);
    setSelectedVideoName(acceptedFiles[0].name);
    simulateUploadProgress(acceptedFiles[0].size);
  }, []);

  const {
    getRootProps: getVideoRootProps,
    getInputProps: getVideoInputProps,
    isDragActive: isVideoDragActive,
  } = useDropzone({ onDrop: onDropVideo });
  const onsubmit = async (data) => {
    console.log(`formSubmitted `, data);
    data.tags = selectedTags;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("categoryID", data.categoryID);
    formData.append("description", data.description);
    formData.append("level", data.level);
    formData.append("tags", [...data.tags]);
    formData.append("duration", data.duration);
    formData.append("imgURL", Video);
    formData.append("instructor", UserID);

    try {
      const response = await axiosInstance.post(
        "http://localhost:4000/course/addCourse",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const simulateUploadProgress = (fileSize) => {
    const bytesPerSecond = 1048576;
    const durationInSeconds = fileSize / bytesPerSecond;
    const intervalTime = 100;
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += (intervalTime / (durationInSeconds * 1000)) * 100;
      const simulatedProgress = Math.min(100, currentProgress);
      setUploadProgress(simulatedProgress);
      if (simulatedProgress === 100) {
        clearInterval(interval);
      }
    }, intervalTime);
  };

  return (
    <div className="w-100  shadow rounded m-2 mt-4 d-flex align-items-center justify-content-center">
      <form
        className=" p-4 bg-white w-100 m-2  mb-4"
        onSubmit={handleSubmit(onsubmit)}
        noValidate
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-bold text-gray-900">
              Add your Courses
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="category"
                  className={` w-100 mt-4 ${style.inpo}`}
                >
                  Choose Category
                </label>
                <select
                  data-te-select-init
                  className={` w-100  ${style.inpo}`}
                  id="courseID"
                  {...register("categoryID", {
                    required: "You must choose your course",
                  })}
                >
                  {categories.map((opts) => (
                    <option key={opts._id} value={opts._id}>
                      {opts.name}
                    </option>
                  ))}
                </select>
                <p className="text-[red] text-12 text-left">
                  {errors.categoryID?.message}
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="title"
                  className={` w-100  ${style.inpo}`}
                >
                  course name
                </label>
                <input
                  {...register("title", {
                    required: true,
                    minLength: 10,
                  })}
                  type="text"
                  id="title"
                  autoComplete="title"
                  className={` w-100  ${style.inpo}`}
                  placeholder="Your Course Title"
                />
                <p className="text-[red] text-12 text-left">
                  {errors.title &&
                    "Course name is required (min. 10 characters)"}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className={` w-100  ${style.inpo}`}
                >
                  description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className={` w-100  ${style.inpo3}`}
                  {...register("description", {
                    required: true,
                    minLength: 50,
                  })}
                />
                <p className="text-[red] text-12 text-left">
                  {errors.description &&
                    "Description is required (min. 50 characters)"}
                </p>
              </div>

              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="Video"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  Choose Cover Image
                </label>
                <div
                  {...getVideoRootProps()}
                  className={` w-100  ${style.inpo2}`}
                >
                  <input id="Video" {...getVideoInputProps()} />
                  {isVideoDragActive ? (
                    <p className="text-[#49bbbd]">
                      {selectedVideoName || "Drop Course  Cover Image"}
                    </p>
                  ) : (
                    <p className="text-[#49bbbd]">
                      {selectedVideoName
                        ? selectedVideoName
                        : "Drag Course  Cover Image"}
                    </p>
                  )}
                </div>
                <ProgressBar className="mt-2" completed={uploadProgress} />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="level"
                  className={` w-100 mt-2 ${style.inpo}`}
                >
                  Level
                </label>
                <select
                  {...register("level", { required: true })}
                  className={` w-100   ${style.inpo}`}
                  id="level"
                  autoComplete="off"
                >
                  <option value="Beginner"> Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="AllLevels">AllLevels</option>
                </select>
                <p className="text-[red] text-12 text-left">
                  {errors.level && "Please select the level of the course"}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="tags"
                  className="block mb-2 text-md font-lg font-bold text-gray-900 dark:text-white"
                >
                  Tags
                </label>
                <Multiselect
                  {...register("tags")}
                  className={` w-100  ${style.inpo}`}
                  isObject={false}
                  onRemove={(event) => {
                    setSelectedTags(
                      selectedTags.filter((tag) => tag !== event)
                    );
                  }}
                  onSelect={(event) => {
                    setSelectedTags([...selectedTags, event]);
                  }}
                  options={tags}
                />
                <p className="text-[red] text-12 text-left">
                  {errors.tags && "Course tag is required"}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="duration"
                  className={` w-100  ${style.inpo}`}
                >
                  Duration (hours)
                </label>
                <input
                  {...register("duration", { required: true })}
                  className={` w-100  ${style.inpo}`}
                  type="number"
                  id="duration"
                />
                <p className="text-[red] text-12 text-left">
                  {errors.duration && "Duration is required"}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="created_at"
                  className={` w-100  ${style.inpo}`}
                >
                  Date
                </label>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  className={` w-100  ${style.inpo}`}
                  placeholder="Select date"
                  id="created_at"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.date && errors.date.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="btn btn-success mb-2"
          >
            Add Courses
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourses;
