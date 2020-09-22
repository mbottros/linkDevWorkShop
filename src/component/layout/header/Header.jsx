import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from './../../../img/linkdevlogo.png';
import "./Header.scss";
class Header extends Component {
  render() {
    return (
      <header className="sticky-top">
        <section className="TopNavBar container">
          <NavLink className="navbar-brand topLogo d-none d-md-inline" to="/">
            <img className="linkdevlogo" src={logo} alt=""/>
          </NavLink>
          <div className="login-header-link float-lg-right d-lg-inline-block float-sm-none d-block">
            <ul className="nav nav-login d-inline-block d-md-block">
              <li className="nav-item d-inline-block">
                <NavLink className="nav-link text-uppercase" to="#">Register</NavLink>
              </li>
              <li className="nav-item d-inline-block">
                <NavLink className="nav-link text-uppercase" to="#">Login</NavLink>
              </li>
            </ul>
            <ul className="nav nav-lang d-inline-block d-md-block float-md-none float-right">
              <li className="nav-item d-inline-block">
                <NavLink className="nav-link text-uppercase selected d-inline-block pr-0" to="">EN</NavLink>
                <NavLink className="nav-link text-uppercase d-inline-block" to="">AR</NavLink>
              </li>
              <li className="nav-item d-inline-block">
                <NavLink className="nav-link text-uppercase" to="">AA</NavLink>
              </li>
            </ul>
          </div>
        </section>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <NavLink className="navbar-brand d-lg-none" to="/">
              <img className="linkdevlogo" width="100" src={ logo } alt="" />
            </NavLink>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Who We Are
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">What We Do</NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="#">Action</NavLink>
                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Get Involved 
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Media Centre</NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/NewsListing">Press Release</NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <span className="navbar-text">
                <NavLink to="#"><i className="fas fa-search fa-flip-horizontal icon-search"></i></NavLink>
              </span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
