import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatSwitch from './ChatSwitch';
import About from './About';
import Contact from './Contact';
import NavObjects from './NavObjects';
import ThemeSlider from './ThemeSlider';

const Content = () => {
  return (
    <Router>
      <NavObjects />
      <ThemeSlider />
      <Routes>
        <Route path="/" element={<ChatSwitch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Content;