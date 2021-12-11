import React from "react";
import ContactItem from "../contactItem/ContactItem";




const ContactList = ({students}) => {
  
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {
        students.map((elt,index) => <ContactItem student={elt} key={index}/>)
      }
    </div>
  );
};

export default ContactList;
