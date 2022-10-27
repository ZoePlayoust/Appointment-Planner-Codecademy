import React from "react";
import { createPortal } from "react-dom";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {


const handleNameChange = (e)=>{
 setName(e.target.value)

}
const handlePhoneChange = (e)=>{
  setPhone(e.target.value)
 
 }
 const handleEmailChange = (e)=>{
  setEmail(e.target.value)
 
 }

  return (
    <form onSubmit={handleSubmit}>
   <input onChange={handleNameChange}type='text' name='name' value={name} placeholder='Name'></input>
   <input onChange={handlePhoneChange} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" type='tel' name='phone' value={phone} placeholder='Phone'></input>
   <input onChange={handleEmailChange}type='email'placeholder='Email'name='email' value={email}></input>

   <input type='submit'></input>

   </form>
  );
};
