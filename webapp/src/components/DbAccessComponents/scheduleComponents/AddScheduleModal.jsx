import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddScheduleModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <form id="editModal" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="ID">
                  User ID
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="ID"
                  type="text"
                  value="User ID"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="Schedule Name">
                  Schedule Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="Schedule Name"
                  type="text"
                  value="Fall 2020"
                />
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
            form="editModal">
            Create
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddScheduleModal;

// import { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { useMutation } from "@apollo/Schedule";
// import { ADD_SCHEDULE } from "../mutations/ScheduleMutations";
// import { GET_SCHEDULES } from "../queries/ScheduleQueries";

// const AddScheduleModal = () => {
//   const [name, setName] = useState("");
//   const [userId, setUserId] = useState("");

//   const [addSchedule] = useMutation(ADD_SCHEDULE, {
//     variables: { name, userId },
//     update(cache, { data: { addSchedule } }) {
//       const { schedules } = cache.readQuery({ query: GET_SCHEDULES });

//       cache.writeQuery({
//         query: GET_SCHEDULES,
//         data: { schedules: [...schedules, addSchedule] },
//       });
//     },
//   });

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (name === "" || userId) {
//       return alert("Please fill in all fields");
//     }

//     addSchedule(name, userId);

//     setName("");
//     userId("");
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         data-bs-toggle="modal"
//         data-bs-target="#addScheduleModal"
//         onClick={() => setShowAddScheduleModal(true)}>
//         <div className="d-flex align-items-center">
//           <FaList className="icon" />
//           <div>Add Schedule</div>
//         </div>
//       </button>

//       <div
//         className="modal fade"
//         id="addScheduleModal"
//         tabIndex="-1"
//         aria-labelledby="addScheduleModalLabel"
//         aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addScheduleModalLabel">
//                 Add Schedule
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={onSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="userId" className="form-label">
//                     User ID
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="userId"
//                     value={userId}
//                     onChange={(e) => setUserId(e.target.value)}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddScheduleModal;
