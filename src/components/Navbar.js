import React from 'react';
import {Link,NavLink} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
  return (
<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
  <NavLink to= "/" className="navbar-brand">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <NavLink exact to= "/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to= "/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
             <NavLink to= "/contact" className="nav-link">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to= "/login" className="nav-link">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to= "/signup" className="nav-link">Registration</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}
export default Navbar;