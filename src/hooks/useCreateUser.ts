import { useMutation } from "@apollo/client/react";
import { graphql } from "../gql";

const createUserDocument = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`);

const useCreateUser = () => {
  return useMutation(createUserDocument);
};

export { useCreateUser };
