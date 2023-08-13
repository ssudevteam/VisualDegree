import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../../Spinner";
import { GET_DEPARTMENT } from "../../../graphql/queries/department";
import "../../../../css/DbAccessData.css";

export default function DepartmentModal({ departmentId, closeModal }) {
  const { loading, error, data } = useQuery(GET_DEPARTMENT, {
    variables: { id: departmentId },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const department = data.department;

  return (
    <div
      className="modal fade show"
      id="displayDepartmentModal"
      tabIndex="-1"
      aria-labelledby="displayDepartmentModal"
      aria-hidden="true"
      style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="displayDepartmentModal">
              Department Info
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
              <label>Name: </label>
              <span>{department.name}</span>
            </div>
            <div className="mb-3">
              <label>URL: </label>
              <span>{department.url}</span>
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
