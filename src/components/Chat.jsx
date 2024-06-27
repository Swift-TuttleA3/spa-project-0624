
import { useState } from 'react';


function Chat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const API_KEY = import.meta.env.VITE_OPEN_API_KEY;

  const model = 'gpt-3.5-turbo';    // 'gpt-3.5-turbo' oder anderes modell noch mit buttons auszuwählen
  const apiBody = {
    "model": model,
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
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
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
          <div>
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              rows="4"
              cols="50"
            />
            <br />
            <div></div>
              <input type="checkbox" id="model1" name="model" value="gpt-3.5-turbo" />
              <label htmlFor="model1">Model 1</label>
              <br />
              <input type="checkbox" id="model2" name="model" value="model2" />
              <label htmlFor="model2">Model 2</label>
              <br />
              <input type="checkbox" id="model3" name="model" value="model3" />
              <label htmlFor="model3">Model 3</label>
              <br />
              <input type="checkbox" id="model4" name="model" value="model4" />
              <label htmlFor="model4">Model 4</label>
        </div>
        <textarea
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          placeholder="Type your prompt here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Send</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}



export default Chat;
