import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import risevaLogo from "@/assets/risevaLogo.jpeg";

const Header = () => {
  return (
    <header className="header sticky top-0 z-50">
      <div className="header-inner">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
