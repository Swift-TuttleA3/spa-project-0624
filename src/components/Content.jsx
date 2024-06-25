import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRequest from './ChatRequest';
import About from './About';
import Contact from './Contact';
import NavObjects from './NavObjects';

const Content = () => {
  return (
      <Router>
        <NavObjects />
      <Routes>
        <Route path="/" element={<ChatRequest />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Content;