import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <nav>
            <Link to="/"></Link>
            <Link to="/about"></Link>
            <Link to="/contact"></Link>
            <Link to="/services"></Link>
            <Link to="/testimonials"></Link>
        </nav>
    </div>
  )
}

export default App