import React, {useState} from "react";

import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import  {ContactsPage}  from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  let [contact, setContact] = useState([
    {name: "Smith",
      phone_number: "0786421112",
      email: "playoustz@gmail.com",
    },
  ]);

  let [appointment, setAppointment] = useState([
    {
      title: "dentist",
      contact: "Smith",
      date: "10/10/22",
      time: "10h00",
    },
  ]);



  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  

const addContact = (target) =>{
  setContact((prev)=>{return [target, ...prev]})


}

const addAppointment = (target) =>{
  setAppointment((prev)=>{return [target, ...prev]})
}



  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage addContact={addContact}
                          contact={contact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage addAppointment={addAppointment}
                              appointment={appointment}
                              contact={contact}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
