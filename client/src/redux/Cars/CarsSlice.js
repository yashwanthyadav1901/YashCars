import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

export const CarSlice = createSlice({
  name: "Cars",
  initialState,
  reducers: {
    getAllCarsStart: (state) => {
      state.loading = true;
    },
    getAllCarsSuccess: (state, action) => {
      state.loading = false;
      state.cars = action.payload;
    },
    getAllCarsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getAllCarsStart, getAllCarsSuccess, getAllCarsFailure } =
  CarSlice.actions;

export const fetchAllCars = () => async (dispatch) => {
  dispatch(getAllCarsStart());
  try {
    const response = await axios.get("/api/cars");
    dispatch(getAllCarsSuccess(response.data));
  } catch (error) {
    dispatch(getAllCarsFailure(error.message));
  }
};

export default CarSlice.reducer;
