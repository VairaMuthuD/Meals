import React from 'react'


import About from './About'
import Home from './Home'
import Meals from './Meals'
import Mealdetail from './Mealdetail'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <nav class="nav">
          <div>
            <h2>#Van Life</h2>
          </div>
          <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="/Meals">Meals</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Meals' element={<Meals />} />
          <Route path='/Meals/:id' element={<Mealdetail />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App