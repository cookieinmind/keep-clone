import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import ServerContextProvider from "./context/ServerContext";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      main: "#fdd835",
    },
    secondary: {
      main: "#311b92",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <ServerContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ThemeProvider theme={theme}>
            <App></App>
          </ThemeProvider>
        </BrowserRouter>
      </ServerContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
