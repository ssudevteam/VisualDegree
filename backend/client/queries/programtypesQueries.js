import { gql } from '@apollo/client';

const GET_PROGRAM_DISTINCT = gql`
  query GetProgramDistinct($id: ID!) {
    programDistinct(id: $id) {
      name
    }
  }
`;

const GET_PROGRAM_DISTINCTS = gql`
  query GetProgramDistincts {
    programDistincts {
      name
    }
  }
`;

export { GET_PROGRAM_DISTINCT, GET_PROGRAM_DISTINCTS };
