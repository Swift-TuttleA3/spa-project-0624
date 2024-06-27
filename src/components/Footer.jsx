import About from "./About";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <p className="text-stone-200" onClick={() => About()}>© APIs-Revenge 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
