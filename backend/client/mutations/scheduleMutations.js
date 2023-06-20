import { gql } from '@apollo/client';

const ADD_SCHEDULE = gql`
  mutation AddSchedule($name: String!, $courses: [ID]) {
    addSchedule(name: $name, courses: $courses) {
      id
      name
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
  }
`;

const UPDATE_SCHEDULE = gql`
  mutation UpdateSchedule(
    $id: ID!,
    $name: String,
    $courses: [ID]
  ) {
    updateSchedule(
      id: $id,
      name: $name,
      courses: $courses
    ) {
      id
      name
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
  }
`;

const DELETE_SCHEDULE = gql`
  mutation DeleteSchedule($id: ID!) {
    deleteSchedule(id: $id) {
      id
      name
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
  }
`;

export { ADD_SCHEDULE, UPDATE_SCHEDULE, DELETE_SCHEDULE}