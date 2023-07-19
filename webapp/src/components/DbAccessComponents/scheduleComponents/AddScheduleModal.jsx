import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SCHEDULE } from "../../../client/mutations/scheduleMutations";
import { GET_SCHEDULES } from "../../../client/queries/scheduleQueries";
import { GET_USERS } from "../../../client/queries/userQueries";

function AddScheduleModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [user, setUserId] = useState("");

  const [addSchedule] = useMutation(ADD_SCHEDULE, {
    update(cache, { data: { addSchedule } }) {
      const { schedules } = cache.readQuery({ query: GET_SCHEDULES });
      cache.writeQuery({
        query: GET_SCHEDULES,
        data: { schedules: [...schedules, addSchedule] },
      });
    },
  });

  const { loading, error, data } = useQuery(GET_USERS);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || user === "") {
      alert("Please fill in all fields");
      return;
    }

    addSchedule({
      variables: { user, name },
    });

    setName("");
    setUserId("");
    handleClose();
  };

  if (loading) return null;
  if (error) return "Something Went Wrong";

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Schedule
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} id="submit" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name">
                  Schedule Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="user">
                  User
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  id="user"
                  className="form-select"
                  value={user}
                  onChange={(e) => setUserId(e.target.value)}>
                  <option value="">Select User</option>
                  {data.users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
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
            Create
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddScheduleModal;
