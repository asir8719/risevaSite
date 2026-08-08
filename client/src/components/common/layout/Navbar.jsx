import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#171616] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Riseva" className="h-5" />
          <h1 className="text-3xl font-bold">Riseva</h1>
        </NavLink>

        {/* Menu */}
        <ul className="flex flex-wrap items-center gap-8 font-medium text-white">
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
          <li>
            <Button className="bg-white text-purple-500 w-25 h-11" variant="default">Button</Button>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
