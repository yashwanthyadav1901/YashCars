import { createSlice } from "@reduxjs/toolkit";

const AlertsSlice = createSlice({
  name: "Alerts",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = AlertsSlice.actions;
export default AlertsSlice.reducer;
