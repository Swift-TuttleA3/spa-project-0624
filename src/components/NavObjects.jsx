import { NavLink } from 'react-router-dom';

export const NavObjects = () => {
    return (
<nav className='bg-slate-500'>
        <ul className='container columns-3 text-center mx-auto text-red-600'>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              ChatBot
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
        </nav>
    )
}
export default NavObjects;
