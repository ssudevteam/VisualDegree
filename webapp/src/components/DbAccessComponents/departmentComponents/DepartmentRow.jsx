import React, { useState } from "react";
import DepartmentModal from "./DepartmentModal";

const DepartmentRow = ({ department, handleButtonClick }) => {
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
        <td>{department.name}</td>
        <td>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={openModal}
            >
              Department Info
            </button>
          </div>
        </td>
      </tr>
      {modalOpen && <DepartmentModal departmentId={department.id} closeModal={closeModal} />}
    </>
  );
};

export default DepartmentRow;
