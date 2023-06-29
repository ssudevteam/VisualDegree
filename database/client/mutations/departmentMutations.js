import { gql } from '@apollo/client';

const ADD_DEPARTMENT = gql`
  mutation AddDepartment(
    $name: String!,
    $url: String
  ) {
    addDepartment(
      name: $name,
      url: $url
    ) {
      id
      name
      url
    }
  }
`;

const UPDATE_DEPARTMENT = gql`
  mutation UpdateDepartment(
    $id: ID!,
    $name: String,
    $url: String
  ) {
    updateDepartment(
      id: $id,
      name: $name,
      url: $url
    ) {
      id
      name
      url
    }
  }
`;

const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($id: ID!) {
    deleteDepartment(id: $id) {
      id
      name
      url
    }
  }
`;

export { ADD_DEPARTMENT, UPDATE_DEPARTMENT, DELETE_DEPARTMENT }