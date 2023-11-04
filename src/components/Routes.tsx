import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./home/Home";
import Chat from "./chat/Chat";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chats/:_id",
    element: <Chat />,
  },
]);

export default router;
