import React from "react";

const EmailTemplate = ({ from, message, name }: any) => {
 return (
  <div>
   <h2>From {from}</h2>
   <div>
    <strong>{name}</strong>: <p>{message}</p>
   </div>
  </div>
 );
};

export default EmailTemplate;
