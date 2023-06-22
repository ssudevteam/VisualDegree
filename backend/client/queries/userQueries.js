import { gql } from '@apollo/client';

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
        department {
          id
          name
          url
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
        programType {
          name
        }
      }
      minor {
        id
        name
        url
        department {
          id
          name
          url
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
        programType {
          name
        }
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

const GET_USER_COUNT_BY_MAJOR = gql`
  query GetUserCountByMajor($programID: ID!) {
    userCountByMajor(programID: $programID) {
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

export { GET_USER, GET_USERS, GET_USER_COUNT_BY_MAJOR, GET_USER_COUNT_BY_UNITS_TAKEN  };
