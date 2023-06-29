const { gql } = require('@apollo/client');

const GET_COURSE = gql`
  query GetCourse($id: ID!) {
    course(id: $id) {
      id
      title
      prefix
      header
      code
      description
      num_units
      ge_category
      prerequisites
      url
    }
  }
`;

const  GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      title
      prefix
      header
      code
      description
      num_units
      ge_category
      prerequisites
      url
      department {
        id
        name
        url
      }
    }
  }
`;

const GET_COURSES_BY_DEPARTMENT = gql`
  query GetCoursesByDepartment($departmentId: ID!) {
    coursesByDepartment(departmentId: $departmentId) {
      id
      title
      prefix
      header
      code
      description
      num_units
      ge_category
      prerequisites
      url
      department {
        id
        name
        url
      }
    }
}
`;

module.exports = { GET_COURSE, GET_COURSES, GET_COURSES_BY_DEPARTMENT };
