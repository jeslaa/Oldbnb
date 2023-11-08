import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import './DatePicker.scss'
import axios from "axios";

type ProductDetailsProps = {
  productName: string;
  description: string;
  price: number;
  imageUrl: string[];
  _id: string;
};

const RangeDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [price, setPrice] = useState<Number | null>(null);

//   useEffect(() => {
//     if (startDate && endDate) {
//       axios
//         .post(`http://localhost:3000/api/price`, {
//           startDate: startDate.toISOString(),
//           endDate: endDate.toISOString(),
//         })
//         .then((respone) => {
//           setPrice(respone.data.price);
//         })
//         .catch((error) => {
//           console.log(error + "Error fetching price");
//         });
//     } else {
//       setPrice(null);
//     }
//   }, [startDate, endDate]);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
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
            ? `Datum valda: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : "Vänligen välj datum"}
        </p>
      </div>
    </div>
  );
};

export default RangeDatePicker;
