import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import {Home} from './pages/home/home.jsx'
import {Catalogo} from './assets/catalogo.jsx'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home valorInicial={100} />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
