import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const Middle = () => {
    const [count, setCount] = useState(0)

    
const handleClick = () => {
  alert('Überraschung! Es funktioniert!')
}

    return (
        <>
    <div className='container mx-auto columns-2'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-2">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <br />
      <div className="w-80 md:w-80 lg:w-80 p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-14 w-14" src={reactLogo} alt="Something"/>
        </div>
        <div>
        <div className="text-xl font-medium text-black">Überraschung</div>
          <p className="text-slate-500">Es funktioniert!</p>
          <button onClick={handleClick} className="mt-3 bg-sky-500 hover:bg-sky-700 active:bg-violet-700">Hier klicken</button>
        </div>
        

            </div>
        </>
    );
}

export default Middle;
