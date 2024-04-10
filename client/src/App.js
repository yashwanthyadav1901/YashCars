import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import Cars from "./pages/Cars";
import dayjs from "dayjs";

function App() {
  const [startTime, setStartTime] = useState(dayjs(Date.now()));
  const [endTime, setEndTime] = useState(dayjs(Date.now()));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
          }
        />
        <Route
          path="/cars"
          element={
            <Cars
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookingcar" element={<BookingCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
