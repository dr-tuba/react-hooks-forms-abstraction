import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Henry',
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   })
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.default
  //   })
  // }

  function handleChange(e) {
    // name is the KEY in of the formData object we're trying to update
    const name = e.target.name
    const value = e.target.value

     // use `checked` property of checkboxes instead of `value`
     if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name='firstName'
        onChange={handleChange} 
        value={formData.firstName} 
      />
      <input 
        type="text" 
        name='lastName'
        onChange={handleChange} 
        value={formData.lastName} 
      />
      <input 
        type='checkbox'
        name='admin'
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
