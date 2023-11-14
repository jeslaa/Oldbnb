import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, differenceInCalendarDays } from "date-fns";
import "./DatePicker.scss";

type RangeDatePickerProps = {
  onNumberOfNightsChange: (numberOfNights: number | null) => void;
};

const RangeDatePicker: React.FC<RangeDatePickerProps> = ({
  onNumberOfNightsChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  //Variable to dislplay how many nights the user has choosen
  let numberOfNights = 0;
  if (startDate && endDate) {
    numberOfNights = differenceInCalendarDays(endDate, startDate);
  }

  //Function to track the start date
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    calculateNumberOfNights(startDate, endDate)
  };

  //Function to track the end date
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    calculateNumberOfNights(startDate, date);
  };

  //Function to calculate the number of nights
  const calculateNumberOfNights = (start: Date | null, end: Date | null) => {
    if (start && end) {
      const numberOfNights = differenceInCalendarDays(end, start);
      onNumberOfNightsChange(numberOfNights);
    } else {
      onNumberOfNightsChange(null);
    }
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
          {numberOfNights > 0 //Displaying the number of nights the user has choosen
            ? `Antal nätter: ${numberOfNights}`
            : "Vänligen välj datum"}
        </p>
      </div>
    </div>
  );
};

export default RangeDatePicker;
