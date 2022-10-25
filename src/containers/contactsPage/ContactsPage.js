import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import { Tilelist } from '../../components/tileList/TileList'



export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
const [profile, setProfile] = useState({name: '', phone: '', email: ''}); 

const [duplicate, setDuplicate] = useState(false);



const contact = props.contact; 
 
const addContact = (objectData) =>{
  props.addContact(objectData)
  
}

const handleChange = ({ target })=>{
  const {name, value} = target;
  setProfile((prevProfile)=> ({prevProfile, [name]: value})) 

}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate){ addContact(e.target.value) 
      setProfile({name: '', phone: '', email: ''})


      
    }

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };


  useEffect((name) => {
    if (name === contact.name){
      setDuplicate(true)
    }
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
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
