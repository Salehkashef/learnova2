import { useEffect } from "react";
import { FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorData } from "../Redux/slices/InstructorSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLocation } from "react-router-dom";

function INSTRUCTOR() {
  const location = useLocation();
  const userID = location.state;

  const dispatch = useDispatch();
  const instructorData = useSelector(
    (state) => state.InstructorReducer.instructor
  );
  const userData = useSelector((state) => state.InstructorReducer.userData);
  const isLoading = useSelector((state) => state.InstructorReducer.loading);

  useEffect(() => {
    dispatch(getInstructorData(userID));
  }, [dispatch, userID]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <section className="row">
          <div className="col-lg-7">
            <div>
              <p className="text-muted">INSTRUCTOR</p>
              <h2>{userData ? userData.fullName : ""}</h2>
              <p className="text-secondary">
                {instructorData ? instructorData.job : ""}
              </p>
              <div className="mb-4 row">
                <div className="col-6">
                  <p>Total Students</p>
                  <h3></h3>
                </div>
                <div className="col-6">
                  <p>Reviews</p>
                  <h3></h3>
                </div>
              </div>
              <h3>About Me</h3>
              <p className="">
                {instructorData
                  ? instructorData.aboutMe
                    ? instructorData.aboutMe
                    : "No information available."
                  : "No information available."}
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-4  ">
              <div
                className="rounded-circle overflow-hidden border border-secondary m-auto "
                style={{ width: "200px", height: "200px" }}
              >
                <img
                  src={
                    userData
                      ? `http://localhost:4000/imgs/${userData.imgURL}`
                      : ""
                  }
                  alt="Instructor"
                  className="img-fluid w-100 h-100"
                />
              </div>
            </div>

            <div className="m-3">
              <a
                href={instructorData ? instructorData.links?.facebook : "#"}
                className={`btn btn-outline-primary mb-2 d-block ${
                  instructorData && instructorData.links?.facebook
                    ? ""
                    : "disabled"
                }`}
                target="_blank"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href={instructorData ? instructorData.links?.linkedIn : "#"}
                className={`btn btn-outline-primary mb-2 d-block ${
                  instructorData && instructorData.links?.linkedIn
                    ? ""
                    : "disabled"
                }`}
                target="_blank"
              >
                <FaLinkedin /> linkedIn
              </a>
              <a
                href={instructorData ? instructorData.links?.Website : "#"}
                className={`btn btn-outline-primary mb-2 d-block ${
                  instructorData && instructorData.links?.Website
                    ? ""
                    : "disabled"
                }`}
                target="_blank"
              >
                <FaGlobe /> Website
              </a>
            </div>
          </div>
        </section>
        <section>
          <h1>My courses</h1>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
}

export default INSTRUCTOR;
