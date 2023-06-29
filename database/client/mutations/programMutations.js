import { gql } from '@apollo/client';

const ADD_PROGRAM = gql`
  mutation AddProgram(
    $name: String!,
    $url: String,
    $department: ID!,
    $courses: [ID],
    $programType: ID!
  ) {
    addProgram(
      name: $name,
      url: $url,
      department: $department,
      courses: $courses,
      programType: $programType
    ) {
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
        id
        name
      }
    }
  }
`;

const UPDATE_PROGRAM = gql`
  mutation UpdateProgram(
    $id: ID!,
    $name: String,
    $url: String,
    $department: ID,
    $courses: [ID],
    $programType: ID
  ) {
    updateProgram(
      id: $id,
      name: $name,
      url: $url,
      department: $department,
      courses: $courses,
      programType: $programType
    ) {
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
        id
        name
      }
    }
  }
`;

const DELETE_PROGRAM = gql`
  mutation DeleteProgram($id: ID!) {
    deleteProgram(id: $id) {
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
        id
        name
      }
    }
  }
`;

export { ADD_PROGRAM, UPDATE_PROGRAM, DELETE_PROGRAM }