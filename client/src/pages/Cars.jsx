import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ModifySearch from "../components/ModifySearch";

const Cars = ({ startTime, setStartTime, endTime, setEndTime }) => {
  return (
    <div>
      <Header />
      <ModifySearch
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />
    </div>
  );
};

export default Cars;
