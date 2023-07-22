import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_COURSE_TO_SCHEDULE } from "../../../client/mutations/scheduleMutations";
import { GET_SCHEDULES } from "../../../client/queries/scheduleQueries";

function AddCourseToScheduleModal({ courses }) {
  const [show, setShow] = useState(false);
  const [scheduleID, setScheduleID] = useState("");
  const [courseID, setCourseID] = useState("");

  const [addCourseToSchedule] = useMutation(ADD_COURSE_TO_SCHEDULE, {
    variables: { scheduleID, courseID },
  });

  const { loading, error, data } = useQuery(GET_SCHEDULES);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (scheduleID === "" || courseID === "") {
      alert("Please fill in all fields");
      return;
    }

    addCourseToSchedule({
      variables: { scheduleID, courseID },
    });

    setScheduleID("");
    setCourseID("");
    handleClose();
  };

  if (loading) return null;
  if (error) return "Something Went Wrong";

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Course To Schedule
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course To Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit} id="submit" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="courses">
                  Courses
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  id="courses"
                  className="form-select"
                  value={courseID}
                  onChange={(e) => setCourseID(e.target.value)}>
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {`${course.prefix} ${course.code}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="schedules">
                  Schedules
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  id="schedules"
                  className="form-select"
                  value={scheduleID}
                  onChange={(e) => setScheduleID(e.target.value)}>
                  <option value="">Select Schedule</option>
                  {data.schedules.map((schedule) => (
                    <option key={schedule.id} value={schedule.id}>
                      {schedule.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-gray-700 hover:bg-blue-700 text-blue font-bold py-2 px-3 rounded"
            onClick={handleClose}>
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-3 rounded"
            form="submit">
            Add Course
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddCourseToScheduleModal;
