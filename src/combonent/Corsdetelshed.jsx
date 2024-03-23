import React, { useState, useEffect } from "react";
import style from "./Corsdetelshed.module.css";
import img from "../assets/img/Group236.png";
import cimg from "../assets/img/business-video-chat-laptop.jpg";
import mainstyle from "./main.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Deteles from "./Deteles";
import Stripe from "./Stripe"; // Import the Stripe component
import axiosInstance from "../Axios/interceptor";
import axios from "axios";

function Corsdetelshed({ data }) {
  const [checkout, setCheckOut] = useState(false);
  const Navigate = useNavigate();
  const [enrolledStudent, setEnrolledStudent] = useState(false);

  console.log(data);
  const UserId = localStorage.getItem("userID");
  const userId = UserId;

  useEffect(() => {
    checkEnrolled();
  }, []);

  const checkEnrolled = async () => {
    const response = await axios.get(
      `http://localhost:4000/user/Enrolled/${data._id}/${userId}`
    );
    setEnrolledStudent(response.data.enrolled);
  };

  return (
    <>
      <section>
        <img className={style.bigimg} src={img} />
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-8  mb-3 mb-sm-0 mt-5">
              <Deteles />
            </div>
            <div className="col-sm-3 ms-5  mb-3 mb-sm-0">
              <div
                className={`card border-0 h-100 d-flex justify-content-center align-items-center ${style.card}`}
              >
                <img
                  src={`http://localhost:4000/imgs/${data.imgURL}`}
                  className={style.cardimg}
                />
                <div className={`card-body`}>
                  <div className="techerimg d-flex justify-content-lg-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center  mt-2">
                      <h3 className={`${mainstyle.linkes}`}>${data.price}</h3>
                    </div>
                  </div>
                  <p className={`card-title ${mainstyle.linkes}`}>
                    Created at: {new Date(data.created_at).toLocaleString()}
                  </p>
                  {enrolledStudent ? (
                    <button
                      className={style.btn}
                      onClick={() => Navigate("/CourseView", { state: data })}
                    >
                      Go to Course
                    </button>
                  ) : checkout ? (
                    <button
                      className={style.btn}
                      onClick={() => {
                        Navigate("/checkout", { state: data });
                      }}
                    >
                      Checkout
                    </button>
                  ) : (
                    <button
                      className={style.btn}
                      onClick={() => {
                        setCheckOut(true);
                      }}
                    >
                      Enroll Now
                    </button>
                  )}
                  <hr className={style.line} />
                  <h4>This Course included</h4>
                  <div className=" d-flex  align-items-center justify-content-between mt-3">
                    <span>
                      <p>Enrolled student </p>
                    </span>
                    <p className="mr-3">
                      {data.enrolledStudents.length} Students
                    </p>
                  </div>
                  <div className=" d-flex  align-items-center justify-content-between">
                    <span>
                      <p className=""> Course Level</p>
                    </span>
                    <p className={style.botomtext}>{data.level}</p>
                  </div>
                  <div className=" d-flex  align-items-center justify-content-between">
                    <span>
                      <p className=""> Lessons</p>
                    </span>
                    <p className={style.botomtext}>
                      {data.lessons.length} lessons
                    </p>
                  </div>
                  <hr className={style.line} />
                  <h4>This Course included</h4>
                  <p className="w75">
                    Class, launched less than a year ago by Blackboard
                    co-founder Michael Chasen, integrates exclusively...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Corsdetelshed;
