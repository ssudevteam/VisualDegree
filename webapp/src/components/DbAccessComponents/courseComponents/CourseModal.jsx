import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner";

export default function CourseModal({ courseId, closeModal }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/course/${courseId}`);
        if (!response.ok) {
          throw new Error("Error fetching course");
        }
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const {
    title,
    prefix,
    header,
    code,
    description,
    num_units,
    ge_category,
    prerequisites,
    url,
  } = course;

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
              <span>{prefix}</span>
            </div>
            <div className="mb-3">
              <label>Code: </label>
              <span>{code}</span>
            </div>
            <div className="mb-3">
              <label>Title: </label>
              <span>{title}</span>
            </div>
            <div className="mb-3">
              <label>Header: </label>
              <span>{header}</span>
            </div>
            <div className="mb-3">
              <label>Description: </label>
              <span>{description}</span>
            </div>
            <div className="mb-3">
              <label>Number of Units: </label>
              <span>{num_units}</span>
            </div>
            <div className="mb-3">
              <label>GE Category: </label>
              <span>{ge_category}</span>
            </div>
            <div className="mb-3">
              <label>Prerequisites: </label>
              <span>{prerequisites}</span>
            </div>
            <div className="mb-3">
              <label>URL: </label>
              <span>{url}</span>
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
}
