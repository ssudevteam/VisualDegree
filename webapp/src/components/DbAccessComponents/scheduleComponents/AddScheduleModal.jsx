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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Stuff</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
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
