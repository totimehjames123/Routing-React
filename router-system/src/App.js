import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import './index.css'
import About from './About'
import Home from './Home'
import Vans from './Vans'

export default function App() {
  const navStyles = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' :'normal'
    }
    
  }
  return (
    <>
      <BrowserRouter>
        <Link to="/">#VanLife</Link>
      <nav>                                     
        <NavLink style={navStyles} to='/'>Home page</NavLink> &nbsp;
        <NavLink style={navStyles} to='/about'>About this page</NavLink> &nbsp;
        <NavLink style={navStyles} to='/vans'>Vans</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vans' element={<Vans />}/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

