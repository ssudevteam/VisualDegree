import { gql } from "@apollo/client";

const ADD_PROGRAM_DISTINCT = gql`
  mutation AddProgramDistinct($name: String!) {
    addProgramDistinct(name: $name) {
      id
      name
    }
  }
`;

const UPDATE_PROGRAM_DISTINCT = gql`
  mutation UpdateProgramDistinct($id: ID!, $name: String) {
    updateProgramDistinct(id: $id, name: $name) {
      id
      name
    }
  }
`;

const DELETE_PROGRAM_DISTINCT = gql`
  mutation DeleteProgramDistinct($id: ID!) {
    deleteProgramDistinct(id: $id) {
      id
      name
    }
  }
`;

export {
  ADD_PROGRAM_DISTINCT,
  UPDATE_PROGRAM_DISTINCT,
  DELETE_PROGRAM_DISTINCT,
};
