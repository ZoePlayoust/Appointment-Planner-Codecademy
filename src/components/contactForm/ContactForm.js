import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChange = ({ target }) =>{
    const {name, value} = target; 
    setName(name.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
   <input onChange={handleChange}type='text' value={name}></input>
   <input onChange={handleChange}type='tel'value={phone}></input>
   <input onChange={handleChange}type='email' value={email}></input>
   <input onChange={handleChange}type='submit'></input>

   </form>
  );
};
