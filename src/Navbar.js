import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">
        <img src="./newone.png" id='pic' />
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end "  id="navbarNavDropdown" >
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link active text-white " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/About">About</Link>
        </li>
        
        <li className="nav-item ">
          <Link className="nav-link text-white"  to="/Privacy">Privacy</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" to="/Contact">Contact</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
