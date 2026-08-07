<<<<<<< HEAD
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <nav className="site-nav">
      <ul className="nav-list">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
=======
import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Riseva" className="w-10 h-10" />
          <h1 className="text-3xl font-bold">Riseva</h1>
        </NavLink>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-medium text-gray-700">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/technologies">Technologies</NavLink>
          </li>

          <li>
            <NavLink to="/team">Team</NavLink>
          </li>

          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> 2be10ba (add navbar)
