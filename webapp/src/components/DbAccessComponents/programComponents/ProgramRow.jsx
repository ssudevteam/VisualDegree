import React, { useState } from "react";
import ProgramModal from "./ProgramModal";

const ProgramRow = ({ program }) => {
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
        <td>{program.name}</td>
        <td>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={openModal}>
              Program Info
            </button>
          </div>
        </td>
      </tr>
      {modalOpen && (
        <ProgramModal programId={program.id} closeModal={closeModal} />
      )}
    </>
  );
};

export default ProgramRow;
