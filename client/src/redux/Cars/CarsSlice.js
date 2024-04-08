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

// import { createSlice } from "@reduxjs/toolkit";
// import { setLoading } from "../Alerts/AlertsSlice";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch();

// const initialState = {
//   cars: [],
// };

// export const CarSlice = createSlice({
//   name: "Cars",
//   initialState,
//   reducers: {
//     getAllCars: async (state, action) => {
//       dispatch(setLoading(true));
//       try {
//         const response = await axios.get("/api/cars");
//         console.log(response);
//         state.cars = response;
//       } catch (error) {}
//     },
//   },
// });

// export const { getAllCars } = CarSlice.actions;

// export default CarSlice.reducer;

// export const getAllCarsAsync = () => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const response = await axios.get("/api/cars");
//     console.log(response);
//     dispatch(getAllCars(response.data));
//     dispatch(setLoading(false));
//   } catch (error) {
//     console.log(error);
//     dispatch(setLoading(false));
//   }
// };
