import { useMutation } from "@apollo/client/react";
import { ApolloCache } from "@apollo/client";
import { graphql } from "../gql";
import { ChatFragment } from "../fragments/chat.fragment";

const createChatDocument = graphql(`
  mutation CreateChat($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
      ...ChatFragment
    }
  }
`);

const useCreateChat = () => {
  return useMutation(createChatDocument, {
    update(cache: ApolloCache, { data }: any) {
      cache.modify({
        fields: {
          chats(existingChats = []) {
            const newChatRef = cache.writeFragment({
              data: data?.createChat,
              fragment: ChatFragment,
              fragmentName: "ChatFragment",
            });
            return [...existingChats, newChatRef];
          },
        },
      });
    },
  });
};

export { useCreateChat };
