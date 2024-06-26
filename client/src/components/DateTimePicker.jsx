import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function DateTimePickerViewRenderers({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) {
  function calculateDurationInHours(start, end) {
    const durationMs = end - start;
    const durationHours = durationMs / (1000 * 60 * 60);
    return durationHours;
  }

  return (
    <div className="py-10 bg-green-400 my-10 rounded-md text-center">
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
                  Search
                </Link>
              </div>
            </div>
            {startTime && endTime !== Date.now() && (
              <h4 className="py-5">
                {calculateDurationInHours(startTime, endTime).toFixed(0)} hours
              </h4>
            )}
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
