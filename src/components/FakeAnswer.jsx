import React, { useState } from 'react';
import { answers } from './AnswerArray'; 

function FakeAnswer() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleSubmit = () => {
    if (!question) {
      return;
    }
    setIsLoading(true);
    setAnswer('');
    setTimeout(() => {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      setAnswer(`Keine Ahnung wovon du sprichst! Aber...${randomAnswer}`);
      setIsLoading(false);
      setClickCount(clickCount + 1);
    }, 2000);
  };
  
  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-violet-800"></div>
        </div>
      );
    } else {
      return 'Frage absenden';
    }
  };

  const renderQuestionPlaceholder = () => {
    if (clickCount >= 3) {
      return <p className='text-2xl text-red-800'>Bist du es langsam nicht leid und möchtest etwas über Drecks-APIs hören?</p>;
    } else {
      return '';
    }
  };

  return (
    <div>
      <textarea
        className='border-4 border-blue-500 object-center m-5 p-2 rounded-md block mx-auto text-black'
        value={question}
        rows={2}
        cols={80}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="m-2 text-gray-100 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 mb-5"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {renderButtonContent()}
        
      </button>
      <div className='container mx-auto'>
        <textarea
          className='border-4 border-blue-500 object-center m-2 p-2 rounded-md block mx-auto text-black'
          placeholder='Deine Frage...'
          value={question}
          readOnly
          rows={2}
          cols={80}
        />
      </div>
      <br />
      <div>
        <textarea
          className='border-4 border-blue-500 object-center m-2 p-2 rounded-md block mx-auto text-black'
          value={answer}
          readOnly
          rows={3}
          cols={80}
          placeholder='Antwort...'
        />
        {renderQuestionPlaceholder()}
      </div>
    </div>
  );
}

export default FakeAnswer;
