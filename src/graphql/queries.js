import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerAvatarUrl
          fullName
          language
          id
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          description
        }
      }
    }
  }
`;
