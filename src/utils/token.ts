const TOKEN = "token";

export const setToken = (token: string) => localStorage.setItem(TOKEN, token);

export const getToken = () => {
  const token = localStorage.getItem(TOKEN);
  return token ? `Bearer ${token}` : "";
};

export const clearToken = () => localStorage.clear();
