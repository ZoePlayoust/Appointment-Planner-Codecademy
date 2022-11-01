import React from "react";

export const ContactPicker = (props) => {
const contacts = props.contacts; 
const onChange = props.handleContactPicker; 

  return (
    <select OnChange={onChange}>
      <option value="">Please select a contact</option>
      {contacts.map(contact => { 
return <option value={contact.name}>{contact.name}</option>
})}
    </select>
  );
};
