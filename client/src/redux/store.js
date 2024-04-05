import { configureStore } from "@reduxjs/toolkit";
import CarReducer from "./Cars/CarsSlice";
import AlertReducer from "./Alerts/AlertsSlice";

export const store = configureStore({
  reducer: {
    car: CarReducer,
    alert: AlertReducer,
  },
});
