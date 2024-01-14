import { getToken } from "./token";

export const commonFetch = async (input: RequestInfo, init: RequestInit = {}) =>
  fetch(input, {
    ...init,
    headers: {
      ...(init.headers || {}),
      authorization: getToken(),
    },
  });
