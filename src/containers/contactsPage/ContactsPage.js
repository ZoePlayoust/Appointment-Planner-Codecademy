import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList'



export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

const [duplicate, setDuplicate] = useState(false);
const [name , setName ] = useState ('')
const [phone , setPhone] = useState ('')
const [email, setEmail] = useState ('')
const contact = props.contact; 
 
const addContact = (objectData) =>{
  props.addContact(objectData)
  
}


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate){ addContact({name: name, phone: phone, email: email}) 
    setName(''); 
    setPhone(''); 
    setEmail('')
  

      
    }
  };
/*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

  useEffect((name) => {
   contact.forEach(c => {if(c.name === name){
    return setDuplicate(true)
  //     return alert('Contact already in the database')
   }})
   return () =>{
    setDuplicate(false)
 }
  })
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} duplicate={duplicate} setName={setName} setEmail={setEmail} setPhone={setPhone} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList info={contact}/>
      </section>
    </div>
  );
};
