import React, { useState } from "react";
import CourseModal from "./CourseModal";

export default function CourseRow({ course, handleButtonClick }) {
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
        <td>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={openModal}
            >
              Course Info
            </button>
          </div>
        </td>
        <td>{course.title}</td>
        <td>{course.num_units}</td>
        <td>{course.code}</td>
        <td>{course.ge_category}</td>
      </tr>
      {modalOpen && (
        <CourseModal courseId={course.id} closeModal={closeModal} />
      )}
    </>
  );
}
