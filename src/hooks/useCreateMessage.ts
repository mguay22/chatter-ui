import { useMutation } from "@apollo/client/react";
import { ApolloCache } from "@apollo/client";
import { graphql } from "../gql";
import { updateMessages } from "../cache/messages";
import { updateLatestMessage } from "../cache/latest-message";

const createMessageDocument = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      ...MessageFragment
    }
  }
`);

const useCreateMessage = () => {
  return useMutation(createMessageDocument, {
    update(cache: ApolloCache, { data }: any) {
      if (data?.createMessage) {
        updateMessages(cache, data.createMessage);
        updateLatestMessage(cache, data.createMessage);
      }
    },
  });
};

export { useCreateMessage };
