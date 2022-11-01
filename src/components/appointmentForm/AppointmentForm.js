import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e)=>{
    setTitle(e.target.value)
   
   }
   const handleDateChange = (e)=>{
    setDate(e.target.value)
   
   }
   const handleTimeChange = (e)=>{
    setTime(e.target.value)
   
   }

   const handleContactPicker = (e)=>{
    setContact(e.target.value)
   
   }
  return (
    <form onSubmit={handleSubmit}>
   <input onChange={handleTitleChange} type='text' name='title' value={title} placeholder='Title'></input>
   <input onChange={handleDateChange}type='date' name='date' value={date} placeholder='Date' min={getTodayString}></input>
   <input onChange={handleTimeChange}type='time' name='time' value={time}  placeholder='Time'></input>
  <ContactPicker OnChange={handleContactPicker} value={contact} contacts={contacts}/>
   <input type='submit'></input>

   </form>
  );
};
