import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Books from './pages/Books'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { books } from './data'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
