import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../../Spinner";
import { GET_COURSE } from "../../../client/queries/courseQueries";
import "../../../../css/DbAccessData.css"; // Update the CSS file path

const CourseModal = ({ courseId, closeModal }) => {
  const { loading, error, data } = useQuery(GET_COURSE, {
    variables: { id: courseId },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error loading course data</div>;
  }

  const course = data.course; // Assuming the course data is returned in the "course" field

  return (
    <div
      className="modal fade show"
      id="displayCourseModal"
      tabIndex="-1"
      aria-labelledby="displayCourseModal"
      aria-hidden="true"
      style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="displayCourseModal">
              Course Info
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <style>
              {`
              .modal-body label {
                margin-right: 0.5rem;
              }
            `}
            </style>
            <div className="mb-3">
              <label>Prefix: </label>
              <span>{course.prefix}</span>
            </div>
            <div className="mb-3">
              <label>Code: </label>
              <span>{course.code}</span>
            </div>
            <div className="mb-3">
              <label>Title: </label>
              <span>{course.title}</span>
            </div>
            <div className="mb-3">
              <label>Header: </label>
              <span>{course.header}</span>
            </div>
            <div className="mb-3">
              <label>Description: </label>
              <span>{course.description}</span>
            </div>
            <div className="mb-3">
              <label>Number of Units: </label>
              <span>{course.num_units}</span>
            </div>
            <div className="mb-3">
              <label>GE Category: </label>
              <span>{course.ge_category}</span>
            </div>
            <div className="mb-3">
              <label>Prerequisites: </label>
              <span>{course.prerequisites}</span>
            </div>
            <div className="mb-3">
              <label>URL: </label>
              <span>{course.url}</span>
            </div>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-secondary"
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={closeModal}></div>
    </div>
  );
};

export default CourseModal;
