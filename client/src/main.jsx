import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/common/layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Services.jsx'
import About from './pages/About/About.jsx'
import Testimonials from './pages/Testimonials/Testimonials.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Technologies from './pages/Technologies/Technologies.jsx'
import Careers from './pages/Careers/Careers'
import Team from './pages/Team/Team'
import Clients from './pages/Clients/Clients'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
      { path: 'technologies', element: <Technologies /> },
      { path: 'careers', element: <Careers /> },
      { path: 'team', element: <Team /> },
      { path: 'clients', element: <Clients /> },


    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
