import axiosInstance from "../../Axios/interceptor";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom/dist";
import { AuthContext } from "../context/AxiosProvider";
import style from "./Info.module.css";

function Info() {
  const navigate = useNavigate();

  const { UserID } = useContext(AuthContext);

  const location = useLocation();
  const users = location.state;

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState(null);
  const [hovering, setHovering] = useState(false);

  const goUpdate = () => {
    navigate("/inst/UpdateProfile", { state: UserID });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("imgURL", file);

    try {
      await axiosInstance.put(
        `http://localhost:4000/user/UserImg/${UserID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${UserID}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (UserID) {
      fetchData();
    }
  }, [UserID]);

  return (
    <div className="   align-items-center mt-4  justify-content-center">
      <div
        className="relative "
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <img
          src={`http://localhost:4000/imgs/${userData && userData.imgURL}`}
          alt="User"
          className={` border rounded-circle mb-4 ${style.userimage}`}
        />
        <label
          htmlFor="fileInput"
          className=""
        >
          {hovering && (
            <FontAwesomeIcon
              icon={faImage}
              className={style.updateicon}
              onClick={() => {
                console.log("Update image clicked");
              }}
            />
          )}
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>

      <div className="bg-white w-100 shadow rounded p-6">
        <div className="d-flex align-items-center p-3">
          <FontAwesomeIcon
            icon={faPen}
            onClick={goUpdate}
            className="mr-2 cursor-pointer"
          />

          <h3 className="text-lg font-semibold text-center">
            Personal Information
          </h3>
        </div>
        <div className="contanit p-4">
          <div className="row">
            <div className="col-md-6">
              <div>
                <span className="font-weight-bold">Name:</span>
                <span>{userData && userData.fullName}</span>
              </div>
              <div>
                <span className="font-weight-bold">Email: </span>
                <span>{userData && userData.Email}</span>
              </div>
              <div>
                <span className="font-weight-bold">Age: </span>
                <span>{userData && userData.age}</span>
              </div>
              <div>
                <span className="font-weight-bold">National ID: </span>
                <span>{userData && userData.nationalId}</span>
              </div>
              <div className="col-md-6">
                <div>
                  <span className="font-weight-bold">Phone: </span>
                  <span>{userData && userData.phone}</span>
                </div>
                <div>
                  <span className="font-weight-bold">Role: </span>
                  <span>{userData && userData.role}</span>
                </div>
                <div>
                  <span className="font-weight-bold">Gender: </span>
                  <span>{userData && userData.gender}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
