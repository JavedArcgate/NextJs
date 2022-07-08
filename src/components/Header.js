import { Button } from 'react-bootstrap'
import React from 'react'

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 px-5 sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg w-100 navbar-light px-5 one sticky-top12 bg-white">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <a className="navbar-brand fw-bold brand" href="#">F&D</a>
              <button className="navbar-toggler border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="d-flex">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item px-3">
                  <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link text-dark" href="#">Menu</a>
                </li>
                <li className="nav-item dropdown px-3">
                  <Button className="nav-link dropdown-toggle bg-transparent border-0 text-dark border-success text-light rounded-pill px-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Button>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link text-dark" href="#">Contact</a>
                </li>
                <li className="nav-item px-3">
                  <Button variant="outline-warning px-4 rounded-pill">Register</Button>
                </li>
                <li className="nav-item px-3">
                  <Button variant="warning rounded-pill px-4 text-light">Login</Button>
                </li>
              </ul>
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header