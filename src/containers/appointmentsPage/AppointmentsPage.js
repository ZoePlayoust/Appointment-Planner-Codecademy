import React, {useState} from "react";
import {AppointmentForm} from'../../components/appointmentForm/AppointmentForm'; 
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
//  const appointments = props.appointment;
//  const addAppointment = props.addAppointment(); 

// const [title, setTitle] = useState(''); 
// const [contact, setContact]= useState(''); 
// const [date, setDate]= useState(''); 
// const [time, setTime]= useState(''); 


// const handleSubmit = (e) => {
//   e.preventDefault();

//    addAppointment(e.target.value); 
//    setContact("")
//    setTitle('')
//    setDate('')
//    setTime('')
//   }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
