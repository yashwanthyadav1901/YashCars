import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import { blue } from "@mui/material/colors";

export default function DateTimePickerViewRenderers() {
  const [startTime, setStartTime] = React.useState(dayjs(Date.now()));
  const [endTime, setEndTime] = React.useState(dayjs(Date.now()));

  function calculateDurationInHours(start, end) {
    const durationMs = end - start;
    const durationHours = durationMs / (1000 * 60 * 60);
    return durationHours;
  }

  return (
    <div className="py-10">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <div>
            <div className="flex gap-20">
              {" "}
              <DateTimePicker
                label="Start Time"
                format="DD/MM/YYYY"
                value={startTime}
                minDate={dayjs(Date.now())}
                onChange={(newStartTime) => {
                  setStartTime(newStartTime);
                }}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
              <DateTimePicker
                label="End Time"
                format="DD/MM/YYYY"
                value={endTime}
                onChange={(newEndTime) => {
                  setEndTime(newEndTime);
                }}
                minDate={dayjs(startTime)}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
            </div>
            {startTime && endTime !== Date.now() && (
              <h4>
                {calculateDurationInHours(startTime, endTime).toFixed(0)} hours
              </h4>
            )}
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
