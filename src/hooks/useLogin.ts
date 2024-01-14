import { useState } from "react";
import { API_URL } from "../constants/urls";
import client from "../constants/apollo-client";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errors";
import { setToken } from "../utils/token";
import { commonFetch } from "../utils/fetch";

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    const res = await commonFetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      if (res.status === 401) {
        setError("Credentials are not valid.");
      } else {
        setError(UNKNOWN_ERROR_MESSAGE);
      }
      return;
    }
    setToken(await res.text());
    setError("");
    await client.refetchQueries({ include: "active" });
  };

  return { login, error };
};

export { useLogin };
