import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"


const Navbar = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Token</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Cart">
         
            Cart</a>
        </li>
        
      </ul>
  </div>
</nav>



  )
}

export default Navbar