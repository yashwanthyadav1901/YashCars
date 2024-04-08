import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCars } from "../redux/Cars/CarsSlice";
import ResponsiveDateTimeRangePickers from "../components/DateTimePicker";
import Header from "../components/Header";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);
  const cars = useSelector((state) => state.car.cars);

  return (
    <>
      <div className="">
        <Header />
        <div className="w-4/5 mx-auto justify-center py-10">
          <h1>Rentals</h1>
          <h2>
            Drive into your next adventure with ease - rent a car and let the
            journey begin!
          </h2>
          <ResponsiveDateTimeRangePickers />
        </div>
      </div>
    </>
  );
};

export default Home;
