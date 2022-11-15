import React from 'react'
import { SiPokemon } from 'react-icons/si';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navBar'>
      <Link to="/">
        <img className='navImg' src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" alt="" />
      </Link>
    </div>
  )
}

export default Navbar