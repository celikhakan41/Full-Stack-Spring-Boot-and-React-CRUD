import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
 
  <div class="container-fluid">

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <Link className="navbar-brand" to="/">
      FullStack Application     
    </Link>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="faint">
        <a href="#">Muhammed Hakan Çelik</a>
        </li>
      </ul>
    </div>

    <Link className="btn btn-outline-light" to="/adduser">
      Add User
      </Link>
  </div>
</nav>
    // <div>
    //   <nav classNameName="navbar navbar-expand-lg navbar-dark bg-primary">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         FullStack Application
    //       </a>
    //       <button 
    //       className="navbar-toggler" 
    //       type="button" 
    //       data-bs-toggle="collapse" 
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent" 
    //       aria-expanded="false" 
    //       aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //       </button> 
    //       
    //     </div>
    //   </nav>
    // </div>
    
  )
}
