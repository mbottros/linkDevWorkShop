import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="topFooter text-white">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-2">
                <h4 className="topTitle">Who We Are</h4>
                <ul className="nav flex-column pt-4 pb-4">
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">About Us</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Mission, Vission & Goals</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Our Message</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Board of Trustees</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Board of Directors</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">FAQ’s</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-2">
                <h4 className="topTitle">Who we do</h4>
                <ul className="nav flex-column pt-4">
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Research</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Programmes</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Collaborations</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">in2Hc</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-2">
                <h4 className="topTitle">Get Involved</h4>
                <ul className="nav flex-column pt-4">
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Donate</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Partners</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-2">
                <h4 className="topTitle">Media Center</h4>
                <ul className="nav flex-column pt-4">
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Photo Gallery</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Video Gallery</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Social Media Hub</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Events</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-8 col-md-4">
                <h4 className="topTitle">Contact Us</h4>
                <ul className="nav flex-column pt-4">
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Contact Details</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link pl-0 pt-0" to="#">Careers</NavLink></li>
                </ul>
                <div className="form-group">
                  <label>Subscribe to our Newsletter</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter Your email Address" aria-label="Enter Your email Address" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-subscribe" type="button" id="subscribe">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <ul className="nav nav-footer">
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase text-white" to="#">Terms & Conditions</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase text-white" to="#">Privacy Policy</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase text-white" to="#">User Agreement</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase text-white" to="#">Sitemap</NavLink>
                  </li>
                </ul>

              </div>
              <div className="col-xs-12 col-md-6">
                <p className="copyright text-right mb-0">Copyright 2016 LinkDev. All Rights Reserved.</p>
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
