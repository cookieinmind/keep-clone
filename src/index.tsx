import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import ServerContextProvider from "./context/ServerContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <ServerContextProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App></App>
          </Provider>
        </BrowserRouter>
      </ServerContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
