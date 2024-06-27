import React, { useState, useEffect } from 'react';


const ThemeSlider = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="absolute top-0 right-0 m-2">
        <button className='bg-blue-700 hover:bg-blue-500 text-xs text-white' onClick={toggleTheme}>d/n</button>
    </div>
  );
};

export default ThemeSlider;