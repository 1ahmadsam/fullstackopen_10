import { gql } from "@apollo/client";

export const AUTHORIZE = gql`
  mutation {
    authorize(credentials: { $username: String!, $password: String! }) {
      accessToken
    }
  }
`;
