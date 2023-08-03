import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQuery } from "@apollo/client";
import { DROP_COURSE_FROM_SCHEDULE } from "../../../client/mutations/scheduleMutations";
import { GET_SCHEDULES } from "../../../client/queries/scheduleQueries";

function DropCourseFromScheduleModal(props) {
  const [show, setShow] = useState(false);
  const [scheduleID, setScheduleID] = useState("");
  const [courseID, setCourseID] = useState("");

  const { loading, error, data, refetch } = useQuery(GET_SCHEDULES);

  const [dropCourseFromSchedule] = useMutation(DROP_COURSE_FROM_SCHEDULE, {
    onCompleted: () => {
      // Refetch the query to get the updated data after dropping the course
      refetch();
      setShow(false);
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getSelectedScheduleCourses = () => {
    if (!scheduleID) return []; // Return an empty array if no schedule is selected

    const selectedSchedule = data.schedules.find(
      (schedule) => schedule.id === scheduleID
    );
    return selectedSchedule ? selectedSchedule.courses : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (scheduleID === "" || courseID === "") {
      alert("Please choose the course you wish to drop from the schedule");
      return;
    }

    dropCourseFromSchedule({
      variables: { scheduleID, courseID },
    });
  };

  if (loading) return null;
  if (error) return "Something Went Wrong";

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Drop Course From Schedule
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Drop Course From Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} id="submit" className="w-full max-w-sm">
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
                  {getSelectedScheduleCourses().map((course) => (
                    <option key={course.id} value={course.id}>
                      {`${course.prefix} ${course.code}`}
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
            Drop Course
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DropCourseFromScheduleModal;
