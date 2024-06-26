
import React, { useState } from 'react';


function Chat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const API_KEY = import.meta.env.VITE_OPEN_API_KEY;
  const apiBody = {
    "model": "gpt-3.5-turbo",
    "prompt": "You are a helpful assistant.",
    "messages": [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: input }
    ],
    "max_tokens": 150
  };


  const handleInputChange = (event) => {
    setInput(event.target.value);
    console.log('input:', input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Sending request to OpenAI API');

    try {
      const res = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'organization': 'org-KSP9RlgXRGgjhe2SMofhvGJg',
          'project': 'proj_lQd5jCZHFKhPxEvFwsBcyxHs',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(apiBody)
      });

      console.log('Response status:', res.status);

      if (!res.ok) {
        const error = await res.json();
        throw new Error(`Error: ${error.error.message}`);
      }

      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Send</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Chat;
