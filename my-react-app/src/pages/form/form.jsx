import React, { useState } from 'react';
import Menu from '../../components/Menu';

const Form = () => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate a POST request
    fetch('http://localhost:5173/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: text
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text:</label>
        <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
        <Menu page={"form"}/>

      </form>
    </div>
  );
};

export default Form;