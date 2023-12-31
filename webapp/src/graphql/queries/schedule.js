import { gql } from "@apollo/client";

const GET_SCHEDULE = gql`
  query GetSchedule($id: ID!) {
    schedule(id: $id) {
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

const GET_SCHEDULES = gql`
  query GetSchedules {
    schedules {
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

export { GET_SCHEDULE, GET_SCHEDULES };
