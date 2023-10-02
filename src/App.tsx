import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { RouterProvider, useLocation } from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import ChatList from "./components/chat-list/ChatList";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Grid container>
          <Grid item md={3}>
            <ChatList />
          </Grid>
          <Grid item md={9}>
            <Container>
              <Guard>
                <RouterProvider router={router} />
              </Guard>
            </Container>
          </Grid>
        </Grid>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
