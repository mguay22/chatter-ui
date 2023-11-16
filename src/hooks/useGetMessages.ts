import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { MessagesQueryVariables } from "../gql/graphql";

export const getMessagesDocument = graphql(`
  query Messages($chatId: String!) {
    messages(chatId: $chatId) {
      ...MessageFragment
    }
  }
`);

const useGetMessages = (variables: MessagesQueryVariables) => {
  return useQuery(getMessagesDocument, { variables });
};

export { useGetMessages };
