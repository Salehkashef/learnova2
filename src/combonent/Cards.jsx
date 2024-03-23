import style from "./Corsesheder.module.css";
import timg from "../assets/img/Group 237.png";
import mainstyle from "./main.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";



function Cards({ data, user, category }) {
  const navigate = useNavigate();

  const goInstructor = () => {
    navigate("/instructor", { state: user._id });
  };

  function goDetails(Data) {
    navigate("/Details", { state: Data });
  }


  console.log(user);
  return (
    <div className={`col p-2   ${mainstyle.cards}`}>
      <div
        className="card shadow border-0 h-100 d-flex justify-content-center align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => goDetails(data)}
      >
        <img
          src={`http://localhost:4000/imgs/${data.imgURL}`}
          className={style.cardimg}
        />
        <div className="card-body">
          <div className="techerimg d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center ">
              <img
                src={`http://localhost:4000/imgs/${category.icon}`}
                className={style.cardimg2}
                alt="Lina"
                style={{ cursor: "pointer" }}
              />{" "}
              <p className="mt-3 ">{category.name}</p>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-2">
              <i className="fa-regular fa-clock mb-3 mx-2"></i>
              <p className={style.botomtext}>{data.duration} hour</p>
            </div>
          </div>
          <h5 className={style.cardTitle}>{data.title}</h5>
          <div>
          <p className={mainstyle.botomtext} >
            <ReactReadMoreReadLess
            readMoreClassName="readMoreClassName"
            charlimit={60}
            readMoreText='read more...'
            readlessText='read less...'
            >
             {data.description}
            </ReactReadMoreReadLess>
            </p>
          
          </div>
          <div className="techerimg d-flex justify-content-lg-between align-items-center">
            <div className="d-flex justify-content-start align-items-center ">
              <img
                src={`http://localhost:4000/imgs/${user.imgURL}`}
                className={style.cardimg2}
                alt="Lina"
                style={{ cursor: "pointer" }}
                onClick={goInstructor}
              />
              <p
                className="mt-3 "
                onClick={goInstructor}
                style={{ cursor: "pointer" }}
              >
                {user.fullName}
              </p>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <p className={mainstyle.linkes}>{data.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
