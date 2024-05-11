import React, { useState } from 'react';
import Menu from '../../components/Menu';

const Form = () => {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Realiza la solicitud HTTP POST al endpoint de tu API
    fetch('https://jwt-gray.vercel.app/form', {
      method: 'POST',
      body: JSON.stringify({ text }), // Envía el texto en el cuerpo de la solicitud
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setSubmittedText(data.text); // Establece el texto devuelto en el estado
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
      </form>
      {submittedText && <p>{submittedText}</p>} {/* Muestra el texto devuelto solo si hay uno */}
      <Menu page={"form"}/>
    </div>
  );
};

export default Form;
