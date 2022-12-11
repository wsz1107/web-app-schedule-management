import React from 'react'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Test = () => {
    const initalDate = new Date();
    const [startDate, setStartDate] = useState(initalDate);
    const handleChange = (date) => {
        setStartDate(date);
    }
    return (
        <DatePicker
            selected={startDate}
            onChange={handleChange}
        />
    )
}