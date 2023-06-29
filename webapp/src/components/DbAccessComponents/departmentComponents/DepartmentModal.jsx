import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner";

export default function DepartmentModal({ departmentId, closeModal }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await fetch(`/api/department/${departmentId}`);
        if (!response.ok) {
          throw new Error("Error fetching department");
        }
        const data = await response.json();
        setDepartment(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching department:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchDepartment();
  }, [departmentId]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const {
    name,
    url,
  } = department;

  return (
    <div
      className="modal fade show"
      id="displayDepartmentModal"
      tabIndex="-1"
      aria-labelledby="displayDepartmentModal"
      aria-hidden="true"
      style={{ display: "block" }}
    >
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
              <span>{name}</span>
            </div>
            <div className="mb-3">
              <label>URL: </label>
              <span>{url}</span>
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
}
