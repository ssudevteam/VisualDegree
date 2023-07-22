import { gql } from "@apollo/client";

const ADD_SCHEDULE = gql`
  mutation AddSchedule($user: ID!, $name: String!) {
    addSchedule(user: $user, name: $name) {
      id
      name
      user {
        id
        name
        student_id
        email
        unitsEnrolled
        unitsTaken
      }
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
  mutation UpdateSchedule($id: ID!, $name: String!, $courses: [ID]) {
    updateSchedule(id: $id, name: $name, courses: $courses) {
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

const ADD_COURSE_TO_SCHEDULE = gql`
  mutation AddCourseToSchedule($scheduleID: ID!, $courseID: ID!) {
    addCourseToSchedule(scheduleID: $scheduleID, courseID: $courseID) {
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

const DROP_COURSE_FROM_SCHEDULE = gql`
  mutation dropCourseFromSchedule($scheduleID: ID!, $courseID: ID!) {
    dropCourseFromSchedule(scheduleID: $scheduleID, courseID: $courseID) {
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

export {
  ADD_SCHEDULE,
  UPDATE_SCHEDULE,
  DELETE_SCHEDULE,
  ADD_COURSE_TO_SCHEDULE,
  DROP_COURSE_FROM_SCHEDULE,
};
