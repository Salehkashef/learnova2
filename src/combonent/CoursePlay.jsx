import { FaClock } from "react-icons/fa";
import "./CoursePlay.css";
import CourseVideo from "./CourseVideo";

function CoursePlay({ lesson, Course }) {
  return (
    <>
      <div className="bg text-white p-4 mb-4">
        <div className="row align-items-center">
          <h1>{Course.title}</h1>
          <div className="col-md-6">
            <p className="fs-4">{lesson.title}</p>
          </div>
          <div className="col-md-6">
            <div className="fs-5 d-flex align-items-center justify-content-end">
              <span>{lesson.duration}</span>
              <FaClock className="ms-1" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <CourseVideo data={lesson.content.video} />
      </div>
      <div>
        <a
          className="btn btn-primary mb-3 download-button"
          href={lesson.content.document}
          download
        >
          Download Document
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="mb-4">
              <h2 className="fs-4 mb-3">Subject</h2>
              <p className="text-muted">{lesson.subject}</p>
            </div>
            <div className="mb-4">
              <h2 className="fs-4 mb-3">Course Field</h2>
              <p className="text-muted">{lesson.lessonField}</p>
            </div>
            <div className="mb-4">
              <h2 className="fs-4 mb-3">Description</h2>
              <p className="text-muted">{lesson.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursePlay;
