import React from "react";


const ContactItem = ({student}) => {
  return <div style={{height:"200px",width:"300px",backgroundColor:"gray",margin:"5px",textAlign:"center"}}>
    <h6>Name:{student.fullName}</h6>
    <p>Phone:{student.phone}</p>
    <p>Email:{student.email}</p>
  </div>
};

export default ContactItem;
