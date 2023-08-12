import { gql } from "@apollo/client";

const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(id: $id) {
      id
      name
      url
      courses {
        id
      }
      programType {
        name
      }
    }
  }
`;

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      url
      courses {
        id
      }
      programType {
        name
      }
    }
  }
`;

const GET_PROGRAMS_BY_PROGRAM_TYPE = gql`
  query GetProgramsByProgramType($type_id: ID!) {
    programsByProgramType(type_id: $type_id) {
      id
      name
      url
      courses {
        id
      }
      programType {
        name
      }
    }
  }
`;

export { GET_PROGRAM, GET_PROGRAMS, GET_PROGRAMS_BY_PROGRAM_TYPE };
