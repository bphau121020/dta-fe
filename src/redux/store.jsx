import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard/dashboardSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer
  }
});   
