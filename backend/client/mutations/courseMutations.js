import { gql } from '@apollo/client';

const ADD_COURSE = gql`
  mutation AddCourse(
    $title: String!,
    $prefix: String!,
    $header: String!,
    $code: String!,
    $description: String!,
    $num_units: String!,
    $ge_category: String!,
    $prerequisites: String,
    $url: String,
    $department: ID!
  ) {
    addCourse(
      title: $title,
      prefix: $prefix,
      header: $header,
      code: $code,
      description: $description,
      num_units: $num_units,
      ge_category: $ge_category,
      prerequisites: $prerequisites,
      url: $url,
      department: $department
    ) {
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
`;

const UPDATE_COURSE = gql`
  mutation UpdateCourse(
    $id: ID!,
    $title: String,
    $prefix: String,
    $header: String,
    $code: String,
    $description: String,
    $num_units: String,
    $ge_category: String,
    $prerequisites: String,
    $url: String,
    $department: ID
  ) {
    updateCourse(
      id: $id,
      title: $title,
      prefix: $prefix,
      header: $header,
      code: $code,
      description: $description,
      num_units: $num_units,
      ge_category: $ge_category,
      prerequisites: $prerequisites,
      url: $url,
      department: $department
    ) {
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
`;

const DELETE_COURSE = gql`
  mutation DeleteCourse($id: ID!) {
    deleteCourse(id: $id) {
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
`;

export { ADD_COURSE, UPDATE_COURSE, DELETE_COURSE  }