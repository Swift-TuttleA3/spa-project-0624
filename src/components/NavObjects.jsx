import { NavLink } from 'react-router-dom';


export const NavObjects = () => {
    return (
      <nav className='bg-slate-500 h-10 relative'>
        <ul className='container columns-3 text-center mx-auto font-bold font-mono text-4xl text-white sticky'>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : '')}>
              ChatBot
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'underline' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'underline' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}
export default NavObjects;
