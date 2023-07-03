// import React, { useState } from 'react';
// import { FaList } from 'react-icons/fa';
// import axios from 'axios';

// const AddScheduleModal = () => {
//   const [name, setName] = useState('');
//   const [userId, setUserId] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (name === '' || userId === '') {
//       return alert('Please fill in all the required fields');
//     }

//     const scheduleData = {
//       name,
//       user: userId,
//       courses: [],
//     };

//     axios
//       .post('/api/schedule', scheduleData)
//       .then((response) => {
//         console.log('Schedule created:', response.data);
//         setName('');
//         setUserId('');
//       })
//       .catch((error) => {
//         console.error('Error creating schedule:', error);
//         // Handle error
//       });
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         data-bs-toggle="modal"
//         data-bs-target="#addScheduleModal"
//         onClick={() => setShowAddScheduleModal(true)}
//       >
//         <div className="d-flex align-items-center">
//           <FaList className="icon" />
//           <div>Add Schedule</div>
//         </div>
//       </button>

//       <div className="modal fade" id="addScheduleModal" tabIndex="-1" aria-labelledby="addScheduleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addScheduleModalLabel">Add Schedule</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={onSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="userId" className="form-label">User ID</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="userId"
//                     value={userId}
//                     onChange={(e) => setUserId(e.target.value)}
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddScheduleModal;
