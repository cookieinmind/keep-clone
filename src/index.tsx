import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import TagContextProvider from "./context/TagContextProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <TagContextProvider>
        <Router>
          <Provider store={store}>
            <App></App>
          </Provider>
        </Router>
      </TagContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
