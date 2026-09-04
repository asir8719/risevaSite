import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Technologies", path: "/technologies" },
  { label: "Team", path: "/team" },
  { label: "Our Clients", path: "/clients" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#171616] text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={handleNavClick}>
          <img src={logo} alt="Riseva" className="h-6 w-auto" />
          <h1 className="text-2xl font-bold sm:text-3xl">Riseva</h1>
        </NavLink>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-xl md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden items-center gap-6 text-sm font-medium text-white md:flex lg:gap-10 lg:text-base">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className="transition-opacity hover:opacity-80">
                {item.label}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink
              to="/contact"
              className="inline-flex h-11 w-24 items-center justify-center rounded-lg bg-white text-sm font-semibold text-purple-500 transition-transform hover:scale-[1.02]"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#171616] md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-base font-medium text-white">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} onClick={handleNavClick} className="block rounded-md px-3 py-2 hover:bg-white/5">
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-purple-500"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
