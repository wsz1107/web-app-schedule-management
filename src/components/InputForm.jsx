import React, { useState } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { db } from '.././firebase';
import { addDoc, collection} from 'firebase/firestore';

export const InputForm = () => {

    const initialDate = new Date();
    const initialStartTime = "09:00";
    const initialEndTime = "09:00";

    const [inputDate, setInputDate] = useState(initialDate);
    const [inputStartTime, setInputStartTime] = useState(initialStartTime);
    const [inputEndTime, setInputEndTime] = useState(initialEndTime);
    const [inputTitle, setInputTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'schedules'),{
            scheduleDate: formatDate(inputDate),
            scheduleStartTime: inputStartTime,
            scheduleEndTime: inputEndTime,
            scheduleTitle: inputTitle,
            scheduleYear: parseInt(inputDate.getFullYear()),
            scheduleMonth: parseInt(inputDate.getMonth()+1),
            scheduleDay: parseInt(inputDate.getDate()),
            scheduleStartTimeHour: parseInt(inputStartTime.slice(0,2)),
            scheduleStartTimeMinute: parseInt(inputStartTime.slice(3,5)),
        })
        setInputTitle("");
    }

    const formatDate = (date) =>{
        const year = date.getFullYear();
        const month = ('00' + (date.getMonth()+1)).slice(-2);
        const day = ('00' + date.getDate()).slice(-2);
        return (year + '-' + month + '-' + day)
    }

    const handleChangeDate = (date) => {
        setInputDate(date);
    }

    const handleChangeStartTime = (e) => {
        setInputStartTime(e.target.value);
    }

    const handleChangeEndTime = (e) => {
        setInputEndTime(e.target.value);
    }

    const handleChangeTitle = (e) => {
        setInputTitle(e.target.value);
    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <div>
                    <DatePicker
                        selected={inputDate}
                        onChange={handleChangeDate}
                        required
                    />
                </div>
                <div>
                    <input type="time" className='start-time' onChange={handleChangeStartTime} value={inputStartTime}></input>
                </div>
                <div>
                    <input type="time" className='end-time' onChange={handleChangeEndTime} value={inputEndTime}></input>
                </div>
                <div>
                    <input type="text" onChange={handleChangeTitle} value={inputTitle} />
                </div>
                <button>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
            </form>
        </div>
    )
}

