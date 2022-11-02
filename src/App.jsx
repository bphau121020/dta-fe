import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthContext";
import { store } from "./redux/store";
import IRoutes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <IRoutes />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
