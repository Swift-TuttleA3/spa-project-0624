import React, { useState } from 'react';
import { answers } from './AnswerArray'; 

function FakeAnswer() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(randomAnswer);
  };

  return (
    <div>
          <input
              className='border-4 border-violet-500 object-center m-5 p-2 rounded-md block mx-auto text-black'
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Stelle eine Frage"
      />
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-5" onClick={handleSubmit}>Frage absenden</button>
      <h2>Deine Frage:</h2>
      <p>{question}</p>
      <h2>Antwort:</h2>
      <p>{answer}</p>
    </div>
  );
}

export default FakeAnswer;
