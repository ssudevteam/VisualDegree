import { gql } from "@apollo/client";

const GET_DEPARTMENT = gql`
  query GetDepartment($id: ID!) {
    department(id: $id) {
      id
      name
      url
    }
  }
`;

const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
      id
      name
      url
    }
  }
`;

export {
  GET_DEPARTMENT,
  GET_DEPARTMENTS,
};
