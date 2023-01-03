import { Button } from "react-bootstrap";
import React from "react";
import HeaderNavData from "../utils/HeaderNavData.json";
import { data } from "jquery";

var d = HeaderNavData;

function Header() {
  let isSubMenu = d.menu !== undefined;
  // console.log(isSubMenu, '*******')
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-5 px-sm-3 one sticky-top bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold brand-color" href="#">
            F&D
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {HeaderNavData.map((data, index) =>
                "menu" in data && data.menu.length > 0 ? (
                  <li key={index} className="nav-item px-3 dropdown">
                    <Button
                      className="nav-link dropdown-toggle bg-transparent border-0 text-dark border-success text-light rounded-pill px-0 shadow-none"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {data.title}
                    </Button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {data.menu.map((menuData, i) => (
                        <li>
                          <a className="dropdown-item" href="#">
                            {menuData.mTiltle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index} className="nav-item px-3 ">
                    <a
                      className="nav-link active text-dark"
                      aria-current="page"
                      href="#"
                    >
                      {data.title}
                    </a>
                  </li>
                )
              )}
              <li className="nav-item px-3">
                <Button variant="outline-warning px-4 rounded-pill">
                  Register
                </Button>
              </li>
              <li className="nav-item px-3">
                <Button variant="warning rounded-pill px-4 text-light">
                  Login
                </Button>
              </li>
            </ul>
            <form className="d-flex d-none">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
