import React, { useState } from 'react';
import { answers } from './AnswerArray'; 

function FakeAnswer() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (!question) {
      return;
    }
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(randomAnswer);
  };

  return (
    <div>
        <textarea
          className='border-4 border-violet-500 object-center m-5 p-2 rounded-md block mx-auto text-black'
        value={question}
        rows={2}
        cols={50}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Stelle eine Frage"
        />
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-5" onClick={handleSubmit}>Frage absenden</button>
        <div className='container mx-auto'>
        <h2 className='p-3'>Deine Frage:</h2>
          <textarea
            className='border-4 border-violet-500 object-center m-5 p-2 rounded-md block mx-auto text-black'
          value={question}
            readOnly
            rows={2}
            cols={50}
          />
        </div>
        <br />
        <div>
          <h2 className='mt-4 p-3'>Antwort:</h2>
          <textarea
            className='border-4 border-violet-500 object-center m-5 p-2 rounded-md block mx-auto text-black'
          value={`Keine Ahnung wovon du sprichst! Aber ${answer}`}
            readOnly
            rows={4}
            cols={50}
          />
        </div>
      </div>
  );
}

export default FakeAnswer;
