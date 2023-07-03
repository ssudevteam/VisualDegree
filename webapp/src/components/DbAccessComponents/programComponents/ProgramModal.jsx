import React from 'react';
import { useQuery } from '@apollo/client';
import Spinner from '../../Spinner';
import { GET_PROGRAM } from '../../../client/queries/programQueries';
import '../../../../css/DbAccessData.css';

const ProgramModal = ({ programId, closeModal }) => {
  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error loading program data</div>;
  }

  const program = data.program;

  return (
    <div
      className="modal fade show"
      id="displayProgramModal"
      tabIndex="-1"
      aria-labelledby="displayProgramModal"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="displayProgramModal">
              Program Info
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
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
              <label>Name: </label>
              <span>{program.name}</span>
            </div>
            <div className="mb-3">
              <label>URL: </label>
              <span>{program.url}</span>
            </div>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={closeModal}></div>
    </div>
  );
};

export default ProgramModal;
