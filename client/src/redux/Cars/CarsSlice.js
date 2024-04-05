import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

const getAllCars = () => {};

export const CarSlice = createSlice({
  name: "Cars",
  initialState,
  reducers: {},
});

export default CarSlice.reducer;
