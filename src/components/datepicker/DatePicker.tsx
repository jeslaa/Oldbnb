import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, differenceInCalendarDays } from "date-fns";
import moment  from 'moment-timezone'
import "./DatePicker.scss";

type RangeDatePickerProps = {
  onNumberOfNightsChange: (numberOfNights: number | null) => void;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

const RangeDatePicker: React.FC<RangeDatePickerProps> = ({
  onNumberOfNightsChange,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  // Function to calculate the number of nights
  const calculateNumberOfNights = (start: Date | null, end: Date | null) => {
    if (start && end) {
      const calculatedNumberOfNights = moment(end).tz('Europe/Stockholm').diff(moment(start).tz('Europe/Stockholm'), 'days');
      onNumberOfNightsChange(calculatedNumberOfNights);
    } else {
      onNumberOfNightsChange(null);
    }
  };

  // Function to track the start date
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    calculateNumberOfNights(date, endDate);
  };

  // Function to track the end date
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    calculateNumberOfNights(startDate, date)
  };

  return (
    <div className="date-picker-container">
      <div className="date-picker">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate ? addDays(startDate, 1) : new Date()}
        />
      </div>
      <div>
        <p>
          {startDate && endDate
            ? `Antal nätter: ${differenceInCalendarDays(endDate, startDate)}`
            : "Vänligen välj datum"}
        </p>
      </div>
    </div>
  );
};

export default RangeDatePicker;
