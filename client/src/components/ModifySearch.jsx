import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";

const ModifySearch = ({ startTime, setStartTime, endTime, setEndTime }) => {
  return (
    <div className="w-full flex py-6 justify-around bg-sky-200">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <div>
            <div className="flex gap-20 justify-center">
              <DateTimePicker
                label="Start Time"
                format="DD/MM/YYYY hh:mm A"
                value={startTime}
                minDate={dayjs(Date.now())}
                onChange={(newStartTime) => {
                  setStartTime(newStartTime); // Corrected: Call the prop function
                }}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
              <DateTimePicker
                label="End Time"
                format="DD/MM/YYYY hh:mm A"
                value={endTime}
                onChange={(newEndTime) => {
                  setEndTime(newEndTime); // Corrected: Call the prop function
                }}
                minDate={dayjs(startTime)}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
              <div>
                <Link
                  to="/cars"
                  className="flex items-center h-full no-underline text-white bg-blue-800 px-14 rounded-md"
                >
                  Modify Search
                </Link>
              </div>
            </div>
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default ModifySearch;
