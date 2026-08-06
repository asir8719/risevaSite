import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Services.jsx'
import About from './pages/About/About.jsx'
import Testimonials from './pages/Testimonials/Testimonials.jsx'
import Contact from './pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/testimonials',
    element: <Testimonials />,
  },
  {
    path: '/contacts',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
