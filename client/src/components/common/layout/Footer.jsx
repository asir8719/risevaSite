import { NavLink } from "react-router-dom";
import risevaLogo from "@/assets/risevaLogo.jpeg";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="site-footer pt-20 bg-[#202022] text-white">

      {/* Main Footer */}
      <div className="footer-inner flex mx-20">

        {/* Logo and Description */}
        <div className="flex-[2] px-4 border-r border-gray-600">
          <aside>
            <figure>
              <img
                src={risevaLogo}
                alt="Riseva Logo"
                className="h-20"
              />
            </figure>
          </aside>

          <aside className="pt-8">
            <p className="text-xl leading-relaxed">
              Building digital experiences that help businesses grow, innovate,
              and move forward. We combine technology, creativity, and
              thoughtful design to turn ideas into impactful digital solutions.
            </p>
          </aside>
        </div>

        {/* Main Links */}
        <div className="flex-1 px-6 border-r border-gray-600">
          <div className="footer-links">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4">

              <li>
                <NavLink
                  to="/about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technologies"
                  className="hover:text-purple-400 transition-colors"
                >
                  Technologies
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/team"
                  className="hover:text-purple-400 transition-colors"
                >
                  Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/careers"
                  className="hover:text-purple-400 transition-colors"
                >
                  Careers
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>

        {/* Services / Technologies */}
        <div className="flex-1 px-6">
          <div className="footer-links">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">

              <li>
                <NavLink
                  to="/technologies"
                  className="hover:text-purple-400 transition-colors"
                >
                  Next.js
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technologies"
                  className="hover:text-purple-400 transition-colors"
                >
                  React
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technologies"
                  className="hover:text-purple-400 transition-colors"
                >
                  Laravel
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technologies"
                  className="hover:text-purple-400 transition-colors"
                >
                  Docker
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technologies"
                  className="hover:text-purple-400 transition-colors"
                >
                  Flutter
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technologies"
                  className="hover:text-purple-400 transition-colors"
                >
                  Java
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  WordPress
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Freelance
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Training Certificate
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Mentorship
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Career Guidance
                </NavLink>
              </li>

            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-lower mt-12">
        <div className="px-6 border-t border-gray-600 mx-16 py-8">

          <div className="flex justify-between items-center font-medium text-lg">

            {/* Contact Information */}
            <div className="flex gap-x-12 items-center">

              {/* Phone */}
              <div>
                <a
                  href="tel:+919608376930"
                  className="block hover:text-purple-400 transition-colors"
                >
                  +91 9608376930
                </a>

                <a
                  href="tel:+916205206013"
                  className="block hover:text-purple-400 transition-colors"
                >
                  +91 6205206013
                </a>
              </div>

              {/* Email */}
              <a
                href="mailto:riseva.tech5587@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                riseva.tech5587@gmail.com
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/risevaofficial?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-500 p-3 rounded-full hover:bg-purple-600 hover:border-purple-600 transition-all"
              >
                <FaInstagram />
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="border border-gray-500 p-3 rounded-full hover:bg-purple-600 hover:border-purple-600 transition-all"
              >
                <FaXTwitter />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/riseva-tech-6421053a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-500 p-3 rounded-full hover:bg-purple-600 hover:border-purple-600 transition-all"
              >
                <FaLinkedinIn />
              </a>

            </div>

            {/* Privacy Policy */}
            <NavLink
              to="/privacy-policy"
              className="hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </NavLink>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;