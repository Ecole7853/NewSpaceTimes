import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      name
      photos
      preferences
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
    query User($_id: ID!) {
        user(_id: $_id) {
        _id
        name
        photos
        preferences
        }
    }
`;

// Need to test - have to wait for front end to test
export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      photos
      preferences
    }
  }
`;