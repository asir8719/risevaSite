import { NavLink } from "react-router-dom";
import risevaLogo from "@/assets/risevaLogo.jpeg";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="site-footer bg-[#202022] pt-14 text-white sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-gray-600 pb-10 lg:grid-cols-[1.5fr_0.8fr_0.9fr] lg:gap-10">
          <div className="border-b border-gray-600 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <figure>
              <img src={risevaLogo} alt="Riseva Logo" className="h-16 sm:h-20" />
            </figure>

            <p className="mt-6 text-base leading-relaxed text-gray-200 sm:text-xl">
              Building digital experiences that help businesses grow, innovate,
              and move forward. We combine technology, creativity, and
              thoughtful design to turn ideas into impactful digital solutions.
            </p>
          </div>

          <div className="border-b border-gray-600 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm sm:text-base">
              <li>
                <NavLink to="/about" className="transition-colors hover:text-purple-400">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="transition-colors hover:text-purple-400">Services</NavLink>
              </li>
              <li>
                <NavLink to="/technologies" className="transition-colors hover:text-purple-400">Technologies</NavLink>
              </li>
              <li>
                <NavLink to="/team" className="transition-colors hover:text-purple-400">Team</NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="transition-colors hover:text-purple-400">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="transition-colors hover:text-purple-400">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm sm:text-base">
              <li><NavLink to="/technologies" className="transition-colors hover:text-purple-400">Next.js</NavLink></li>
              <li><NavLink to="/technologies" className="transition-colors hover:text-purple-400">React</NavLink></li>
              <li><NavLink to="/technologies" className="transition-colors hover:text-purple-400">Laravel</NavLink></li>
              <li><NavLink to="/technologies" className="transition-colors hover:text-purple-400">Docker</NavLink></li>
              <li><NavLink to="/technologies" className="transition-colors hover:text-purple-400">Flutter</NavLink></li>
              <li><NavLink to="/technologies" className="transition-colors hover:text-purple-400">Java</NavLink></li>
              <li><NavLink to="/services" className="transition-colors hover:text-purple-400">WordPress</NavLink></li>
              <li><NavLink to="/services" className="transition-colors hover:text-purple-400">Freelance</NavLink></li>
              <li><NavLink to="/services" className="transition-colors hover:text-purple-400">Training Certificate</NavLink></li>
              <li><NavLink to="/services" className="transition-colors hover:text-purple-400">Mentorship</NavLink></li>
              <li><NavLink to="/services" className="transition-colors hover:text-purple-400">Career Guidance</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="py-6 sm:py-8">
          <div className="flex flex-col gap-6 text-sm font-medium sm:text-base lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
              <a href="tel:+919608376930" className="transition-colors hover:text-purple-400">+91 9608376930</a>
              <a href="tel:+916205206013" className="transition-colors hover:text-purple-400">+91 6205206013</a>
              <a href="mailto:riseva.tech5587@gmail.com" className="transition-colors hover:text-purple-400">riseva.tech5587@gmail.com</a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <a href="https://www.instagram.com/risevaofficial?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 transition-all hover:border-purple-600 hover:bg-purple-600"> <FaInstagram /> </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 transition-all hover:border-purple-600 hover:bg-purple-600"> <FaXTwitter /> </a>
              <a href="https://www.linkedin.com/in/riseva-tech-6421053a8/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 transition-all hover:border-purple-600 hover:bg-purple-600"> <FaLinkedinIn /> </a>
            </div>

            <NavLink to="/privacy-policy" className="transition-colors hover:text-purple-400">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;