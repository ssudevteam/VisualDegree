import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      name
      student_id
      email
      unitsEnrolled
      unitsTaken
      major {
        id
        name
        url
      }
      minor {
        id
        name
        url
      }
      completed_courses {
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

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      student_id
      email
      unitsEnrolled
      unitsTaken
      major {
        id
        name
        url
      }
      minor {
        id
        name
        url
      }
      completed_courses {
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

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      student_id
      email
      unitsEnrolled
      unitsTaken
      major {
        id
        name
        url
      }
      minor {
        id
        name
        url
      }
      completed_courses {
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
const ADD_COURSE_TO_COMPLETED_COURSES = gql`
  mutation addCourseToCompletedCourses($userID: ID!, courseID: ID!) {
    deleteSchedule(userID: $userID, courseID: $courseID) {
      id
      name
      student_id
      email
      unitsEnrolled
      unitsTaken
      major {
        id
        name
        url
      }
      minor {
        id
        name
        url
      }
      completed_courses {
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
      schedule {
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
  }
`;

export {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  ADD_COURSE_TO_COMPLETED_COURSES,
};
