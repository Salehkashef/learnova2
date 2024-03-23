import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBook,
  faChalkboard,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/img/person.png";
import style from"./SideNav.module.css"; 
import { useEffect, useState } from "react";
import axiosInstance from "../../Axios/interceptor";

function SideNav() {
  const [userData, setUserData] = useState(null);
  const UserID = localStorage.getItem("userID")
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
    <div className={style.sidenav}>
      <div className="mb-30  text-center">
        <img
          src={`http://localhost:4000/imgs/${userData && userData.imgURL}`}
          className="rounded-circle mx-auto img-fluid"
          alt="User Profile"
        />
        <h1 className="text-white my-3 font-bold">{userData && userData.fullName}</h1>
      </div>
      <ul className="nav flex-column align-items-start">
        <li className="nav-item">
          <NavLink
            to="profile"
            className={`btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="AddCourse"
            className={` btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Add Course
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="AddLesson"
            className={`btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faChalkboard} className="mr-2" />
            Add Lesson
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="AddQuiz"
            className={`btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />
            Add Quiz
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
