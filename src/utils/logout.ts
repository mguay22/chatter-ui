import router from "../components/Routes";
import client from "../constants/apollo-client";
import { authenticatedVar } from "../constants/authenticated";
import { clearToken } from "./token";

export const onLogout = () => {
  authenticatedVar(false);
  clearToken();
  router.navigate("/login");
  client.resetStore();
};
