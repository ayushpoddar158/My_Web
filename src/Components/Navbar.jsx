import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyWeb</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/todolist">ToDo list</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/shopify">Shopify</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/weather">Weather</Link>
          </li>
       
        
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar