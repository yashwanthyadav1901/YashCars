import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const cars = useSelector((state) => state.car.cars);
  console.log(cars);
  const dispatch = useDispatch();
  return (
    <div>
      Home
      <h1>the length of cars Array is {cars.length}</h1>
      <h2>hello</h2>
    </div>
  );
};

export default Home;
