import risevaLogo from "@/assets/risevaLogo.jpeg"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="site-footer pt-20 bg-[#202022] text-white">
      <div className="footer-inner flex mx-20">
        <div className="flex-2 px-4 border-r">
          <aside>
            <figure>
              <img src={risevaLogo} alt="risevaLogo" className="h-20" />
            </figure>
          </aside>
          <aside className="pt-8">
            <p className="text-xl">
              Building digital experiences that help businesses grow, innovate, and move forward. We combine technology, creativity, and thoughtful design to turn ideas into impactful digital solutions.
            </p>
          </aside>
        </div>
        <div className="flex-1 px-6 border-r">
          <div className="footer-links">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Technologies</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-1/12 px-4">
          <div className="footer-links">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
              <li><a href="">Nextjs</a></li>
              <li><a href="">React</a></li>
              <li><a href="">Laravel</a></li>
              <li><a href="">Docker</a></li>
              <li><a href="">Flutter</a></li>
              <li><a href="">Java</a></li>
              <li><a href="">Wordpress</a></li>
              <li><a href="">Freelance</a></li>
              <li><a href="">Training Certificate</a></li>
              <li><a href="">Mentorship</a></li>
              <li><a href="">Career Guidance</a></li>
            </ul>
          </div>
        </div>
        {/* <p>© {new Date().getFullYear()} Riseva. All rights reserved.</p> */}
      </div>
      <div className="footer-lower mt-12">
        <div className="px-6 border-t mx-16 py-8">
          <ul className="flex justify-between items-center font-medium text-lg">
            <div className="flex gap-x-12 items-center">
              <div>
                <li><a href="tel:+919608376930">+919608376930</a></li>
                <li><a href="tel:+916205206013">+916205206013</a></li>
              </div>
              <li><a href="mailto:riseva.tech5587@gmail.com">riseva.tech5587@gmail.com</a></li>
              <li className="border p-3 rounded-full"><a href="https://www.instagram.com/risevaofficial?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li className="border p-3 rounded-full"><a href=""><FaXTwitter /></a></li>
              <li className="border p-3 rounded-full"><a href="https://www.linkedin.com/in/riseva-tech-6421053a8/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            </div>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
