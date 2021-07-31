import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

// Need to test when Front end is done
export const REMOVE_USER = gql`
  mutation removeUser($name: String!) {
    removeUser(name: $name) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_PHOTO = gql`
mutation addPhoto($userId: ID!, $photo: String!) {
    addPhoto(userId: $userId, photo: $photo) {
        _id
        name
        photos
      }
    }
    `;

// Need to test when Front end is done
export const DELETE_PHOTO = gql`
mutation deletePhoto($photo: String!) {
    deletePhoto(photo: $photo) {
        _id
        name
        photos
      }
    }
    `;

export const ADD_PREF = gql`
mutation addPref($userId: ID!, $pref: String!) {
    addPref(userId: $userId, pref: $pref) {
        _id
        name
        preferences
      }
    }
    `;

// Need to test when front end is done
export const DELETE_PREF = gql`
mutation deletePref($pref: String!) {
    deletePref(pref: $pref) {
        _id
        name
        preferences
      }
    }
    `;