import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import ServerContextProvider from "./context/ServerContext";

const queryClient = new QueryClient();

console.log(process.env.PUBLIC_URL);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <ServerContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App></App>
        </BrowserRouter>
      </ServerContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
