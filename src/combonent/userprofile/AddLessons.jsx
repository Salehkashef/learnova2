import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../Axios/interceptor";
import { useDropzone } from "react-dropzone";
import ProgressBar from "@ramonak/react-progress-bar";
import style from "./AddLessons.module.css"; 


function AddLessons() {
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [Val, setValue] = useState();
  const [Video, setVideo] = useState(null);
  const [document, setDocument] = useState(null);
  const [selectedVideoName, setSelectedVideoName] = useState("");
  const [selectedDocumentName, setSelectedDocumentName] = useState("");
  const [videoUploadProgress, setVideoUploadProgress] = useState(0);
  const [documentUploadProgress, setDocumentUploadProgress] = useState(0);
  useEffect(() => {
    axiosInstance.get("http://localhost:4000/course/all").then((val) => {
      setValue(val.data.data);
    });
  }, []);

  const onDropVideo = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setVideo(acceptedFiles[0]);
    setSelectedVideoName(acceptedFiles[0].name);
    simulateUploadProgress(acceptedFiles[0].size, setVideoUploadProgress);
  }, []);

  const onDropDocument = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);

    setDocument(acceptedFiles[0]);
    setSelectedDocumentName(acceptedFiles[0].name);
    simulateUploadProgress(acceptedFiles[0].size, setDocumentUploadProgress);
  }, []);
  const simulateUploadProgress = (fileSize, setProgress) => {
    const bytesPerSecond = 1048576;
    const durationInSeconds = fileSize / bytesPerSecond;
    const intervalTime = 100;
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += (intervalTime / (durationInSeconds * 1000)) * 100;
      const simulatedProgress = Math.min(100, currentProgress);
      setProgress(Math.round(simulatedProgress));
      if (simulatedProgress === 100) {
        clearInterval(interval);
      }
    }, intervalTime);
  };
  const {
    getRootProps: getVideoRootProps,
    getInputProps: getVideoInputProps,
    isDragActive: isVideoDragActive,
  } = useDropzone({ onDrop: onDropVideo });
  const {
    getRootProps: getDocumentRootProps,
    getInputProps: getDocumentInputProps,
    isDragActive: isDocumentDragActive,
  } = useDropzone({ onDrop: onDropDocument });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("CourseID", data.CourseID);
    formData.append("title", data.title);
    formData.append("video", Video);
    formData.append("document", document);
    formData.append("duration", data.duration);
    formData.append("description", data.description);
    formData.append("subject", data.subject);
    formData.append("lessonField", data.lessonField);

    axiosInstance
      .post("http://localhost:4000/lesson/addlesson", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((val) => {
        console.log(val);
        reset();
      });
  };

  function Reset() {
    reset();
  }
  return (
    <div className="w-100  px-5 mt-4 d-flex items-center justify-center">
      <form
        className=" shadow rounded w-100 mx-auto bg-white px-5 pt-4 pb-5 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-bold  text-gray-900">
              Add your Lessons
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="courseID"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  choose course
                </label>
                <select
                  data-te-select-init
                  className={` w-100  ${style.inpo}`}
                  id="courseID"
                  {...register("CourseID", {
                    required: "you must choose your course",
                  })}
                >
                  {Val &&
                    Val.map((opts) => (
                      <option key={opts._id} value={opts._id}>
                        {opts.title}
                      </option>
                    ))}
                </select>
                <p className="text-[red] text-12 text-left">
                  {errors.courseID?.message}
                </p>
              </div>
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  lesson name
                </label>
                <input
                  {...register("title", {
                    required: " lesson name is required",
                    minLength: {
                      value: 8,
                      message: "invalid lesson name (short name)",
                    },
                  })}
                  type="text"
                  id="title"
                  className={` w-100  ${style.inpo}`}
                  placeholder="  your Course title"
                />
                <p className="text-[red] text-12 text-left">
                  {errors.title?.message}
                </p>
              </div>

              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="Video"
                  className="block m"
                >
                  Choose Video
                </label>
                <div
                  {...getVideoRootProps()}
                  className="mt-2"
                >
                  <input id="Video" {...getVideoInputProps()} />
                  {isVideoDragActive ? (
                    <p className={` w-100  ${style.inpo2}`}>
                      {selectedVideoName || "Drop Course video"}
                    </p>
                  ) : (
                    <p className={` w-100  ${style.inpo2}`}>
                      {selectedVideoName
                        ? selectedVideoName
                        : "Drag Course Video"}
                    </p>
                  )}
                </div>
                <ProgressBar
                  className="mt-2"
                  bgColor="#252641"
                  completed={videoUploadProgress}
                />
                ;
              </div>
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="Document"
                  className=" mt-2"
                >
                  Choose Document
                </label>
                <div
                  {...getDocumentRootProps()}
                  className={` w-100  ${style.inpo2}`}
                >
                  <input id="Document" {...getDocumentInputProps()} />
                  {isDocumentDragActive ? (
                    <p className={` w-100  ${style.inpo2}`}>
                      {selectedDocumentName || "Drop Course document"}
                    </p>
                  ) : (
                    <p >
                      {selectedDocumentName
                        ? selectedDocumentName
                        : "Drag Course Document"}
                    </p>
                  )}
                </div>
                {errors.document && (
                  <p className="text-red-500">
                    Please select a valid file type
                  </p>
                )}
                <ProgressBar
                  className="mt-2"
                  completed={documentUploadProgress}
                  bgColor="#252641"
                />
                ;
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block mb-2 text-md font-lg font-bold text-gray-900 dark:text-white"
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
              <div className="col-span-full">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-md font-lg font-bold text-gray-900 dark:text-white"
                >
                  subject
                </label>
                <textarea
                  id="subject"
                  rows={3}
                  className={` w-100  ${style.inpo3}`}
                  {...register("subject", {
                    required: true,
                    minLength: 50,
                  })}
                />
                <p className="text-[red] text-12 text-left">
                  {errors.subject &&
                    "Description is required (min. 50 characters)"}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="lessonField"
                  className="block mb-2 text-md font-lg font-bold text-gray-900 dark:text-white"
                >
                  lessonField
                </label>
                <textarea
                  id="lessonField"
                  rows={3}
                  className={` w-100  ${style.inpo3}`}
                  {...register("lessonField", {
                    required: true,
                    minLength: 50,
                  })}
                />
                <p className="text-[red] text-12 text-left">
                  {errors.lessonField &&
                    "lessonField is required (min. 50 characters)"}
                </p>
              </div>

              <div className="col-span-full sm:col-span-6">
                <label
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                  htmlFor="duration"
                >
                  duration (hours)
                </label>

                <input
                  {...register("duration", {
                    required: {
                      value: true,
                      message: "Duration is required",
                    },
                    validate: {
                      positiveNumber: (value) =>
                        parseFloat(value) > 0 ||
                        "Duration must be a positive number",
                    },
                  })}
                  className={` w-100  ${style.inpo}`}
                  type="number"
                  id="duration"
                />
                <p className="text-[red] text-12 text-left">
                  {errors.duration?.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 d-flex align-items-center justify-content-end ">
          <button
            type="button"
            className="btn btn-danger me-2 mb-2"
            onClick={Reset}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-success mb-2"
          >
            Add Lesson
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLessons;
