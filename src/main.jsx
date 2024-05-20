import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import { theme } from "./theme/theme.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
