import { gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
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
        programType {
          name
        }
      }
      minor {
        id
        name
        url
        programType {
          name
        }
      }
      completed_courses {
        title
        id
        num_units
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
        }
      }
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
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
        programType {
          name
        }
      }
      minor {
        id
        name
        url
        programType {
          name
        }
      }
      completed_courses {
        title
        id
        num_units
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
        }
      }
    }
  }
`;

const GET_USERS_IN_MAJOR = gql`
  query GetUsersInMajor($programID: ID!) {
    usersInMajor(programID: $programID) {
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
        programType {
          name
        }
      }
      minor {
        id
        name
        url
        programType {
          name
        }
      }
      completed_courses {
        title
        id
        num_units
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
        }
      }
    }
  }
`;

const GET_USER_SCHEDULES = gql`
  query GetUserSchedules($user: ID!) {
    userSchedules(user: $user) {
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
        }
      }
    }
  }
`;


export { GET_USER, GET_USERS, GET_USERS_IN_MAJOR, GET_USER_SCHEDULES };
