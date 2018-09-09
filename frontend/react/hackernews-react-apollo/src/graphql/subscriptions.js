import { gql } from "react-apollo";

export const NEW_LINKS_SUBSCRIPTION = gql`
  subscription {
    Link(filter: { mutation_in: [CREATED] }) {
      node {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

export const VOTE_SUBSCRIPTION = gql`
  subscription {
    Vote(filter: { mutation_in: [CREATED] }) {
      node {
        id
        link {
          id
          url
          description
          createdAt
          postedBy {
            id
            name
          }
          votes {
            id
            user {
              id
            }
          }
        }
        user {
          id
        }
      }
    }
  }
`;
