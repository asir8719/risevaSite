import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import risevaLogo from "@/assets/risevaLogo.jpeg";

const Header = () => {
  return (
    <header className="header p-3 bg-amber-500">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src={risevaLogo} alt="Logo" width={40} />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
