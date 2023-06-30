import React, { useState } from "react";
import CourseModal from "./CourseModal";

const CourseRow = ({ course, handleButtonClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <tr>
        <td></td>
        <td>{course.title}</td>
        <td>{course.num_units}</td>
        <td>{course.code}</td>
        <td>{course.ge_category}</td>
        <td>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={openModal}>
              Course Info
            </button>
          </div>
        </td>
      </tr>
      {modalOpen && (
        <CourseModal courseId={course.id} closeModal={closeModal} />
      )}
    </>
  );
};

export default CourseRow;
