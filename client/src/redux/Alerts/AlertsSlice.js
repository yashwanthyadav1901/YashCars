import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  loading: false,
};

const AlertsSlice = createSlice({
  name: "Alerts",
  initialData,
  reducers: {
    Alert: (state, action) => {
      switch (action.type) {
        case "LOADING": {
          return {
            ...state,
            loading: action.payload,
          };
        }
        default:
          return state;
      }
    },
  },
});

export default AlertsSlice.reducer;
