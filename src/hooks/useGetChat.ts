import { useQuery } from "@apollo/client/react";
import { graphql } from "../gql";
import { ChatQueryVariables } from "../gql/graphql";

const getChatDocument = graphql(`
  query Chat($_id: String!) {
    chat(_id: $_id) {
      ...ChatFragment
    }
  }
`);

const useGetChat = (variables: ChatQueryVariables) => {
  return useQuery(getChatDocument, { variables });
};

export { useGetChat };
