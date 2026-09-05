import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Seo from '../Seo'

const Layout = () => {
  return (
    <div className="app-shell">
      <Seo />
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
