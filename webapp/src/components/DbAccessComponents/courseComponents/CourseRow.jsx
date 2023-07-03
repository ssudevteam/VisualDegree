import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { DELETE_COURSE, GET_COURSES, GET_PROJECTS } from '../client/queries/courseQueries';
import CourseModal from './CourseModal';

export default function CourseRow({ course }) {
  // const [deleteCourse] = useMutation(DELETE_COURSE, {
  //   variables: { id: course.id },
  //   refetchQueries: [{ query: GET_COURSES }, { query: GET_PROJECTS }],
  //   // update(cache, { data: { deleteCourse } }) {
  //   //   const { courses } = cache.readQuery({ query: GET_COURSES });
  //   //   cache.writeQuery({
  //   //     query: GET_COURSES,
  //   //     data: {
  //   //       courses: courses.filter((course) => course.id !== deleteCourse.id),
  //   //     },
  //   //   });
  //   // },
  // });

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
        <td></td>
        <td>{course.title}</td>
        <td>{course.num_units}</td>
        <td>{course.code}</td>
        <td>{course.ge_category}</td>
        <td>
          <div>
            <button type="button" className="btn btn-secondary" onClick={openModal}>
              Course Info
            </button>
          </div>
        </td>
      </tr>
      {modalOpen && (
        <CourseModal courseId={course.id} closeModal={closeModal} />
      )}
    </>
  );
}
