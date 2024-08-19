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
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input type="text" 
        value={name} 
        id='name'
        onChange={(e) => setName(e.target.value)} 
        required/>
      <label htmlFor='phone'>Phone: </label>
      <input type="tel" 
        value={phone} 
        id='phone'
        pattern="[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}"
        onChange={(e) => setPhone(e.target.value)} 
        required/>
      <label htmlFor='email'>Email: </label>
      <input type="email" 
        value={email} 
        id='email'
        onChange={(e) => setEmail(e.target.value)} 
        required/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

