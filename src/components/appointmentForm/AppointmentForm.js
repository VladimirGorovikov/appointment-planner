import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title: </label>
      <input type="text" 
        value={title} 
        id='title'
        onChange={(e) => setTitle(e.target.value)} 
        required/>
      <label htmlFor='date'>Date: </label>
      <input type="date" 
        value={date} 
        id='date'
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)} 
        required/>
      <label htmlFor='time'>Time: </label>
      <input type="time" 
        value={time} 
        id='time'
        onChange={(e) => setTime(e.target.value)} 
        required/>
      <label htmlFor='contact'>Contact: </label>
      <ContactPicker id='contact' 
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
        value={contact} 
        name={contact} />
      <input type="submit" value="Submit"/>
    </form>
  );
};
