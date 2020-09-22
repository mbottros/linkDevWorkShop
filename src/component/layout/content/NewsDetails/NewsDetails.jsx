import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import data from '../../../data/newsapi.json';
import pressData from "./../../../../img/pressData.png"
import "./NewsDetails.scss";
class NewsDetails extends Component {
  formatDate = (string) => {
    var options = { day: 'numeric', year: 'numeric', month: 'long' };
    return new Date(string).toLocaleDateString([], options);
  }
  render() {
    let dataIndex = window.location.search.replace('?id=', '')
    const articalData = data.articles[ dataIndex - 1 ];
    return (
      <section className="NewsDetails mb-5">
        <div className="breadcrumb-custom border-bottom">
          <nav aria-label="breadcrumb" className="navbar container">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><NavLink exact to="/">Home</NavLink></li>
              <li className="breadcrumb-item"><NavLink to="#">Media Center</NavLink></li>
              <li className="breadcrumb-item"><NavLink to="/NewsListing">Press Release</NavLink></li>
              <li className="breadcrumb-item active" aria-current="page">{ articalData.title }</li>
            </ol>
            <ul className="nav nav-icon">
              <li className="nav-item">
                <NavLink className="nav-link" to="#"><i className="fas fa-print"></i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#"><i className="far fa-envelope"></i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#"><i className="fas fa-share-alt"></i></NavLink>
              </li>
            </ul>
          </nav>
        </div>
          <div className="container">
          <h3 className="card-title card-press mt-4 text-uppercase">Press Releases</h3>
          <div className="card mb-3 border-0">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ articalData.urlToImage } className="card-img" alt="pressData"/>
              </div>
                <div className="col-md-8">
                  <div className="card-body pt-0 pb-3">
                  <h5 className="card-title mb-0">{ articalData.title}</h5>
                  <p className="card-text mb-1"><small className="text-muted">{ this.formatDate(articalData.publishedAt)}</small></p>
                  <p className="card-text">{ articalData.description}</p>
                  </div>
                </div>
            </div>
            <div className="card-body p-0 mt-3">
              <p className="card-text">{ articalData.content}</p>
              <h3 className="card-title text-uppercase mt-5">ATTACHMENTS</h3>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <button type="button" className="btn btn-block btn-download text-left btn-lg rounded-0">
                    <span>AL Jalila Foundation.PDF</span>
                    <span className="float-right span-icon-download"><i className="fas fa-download text-white"></i></span>
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button type="button" className="btn btn-block btn-download text-left btn-lg rounded-0">
                    <span>AL Jalila Foundation.PDF</span>
                    <span className="float-right span-icon-download"><i className="fas fa-download text-white"></i></span>
                  </button>
                </div>
              </div>
              <h3 className="card-title text-uppercase mt-5">YOU MAY ALSO BE INTERESTED IN </h3>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-white">
                    <img src={pressData} className="card-img" alt="..."/>
                    <div className="card-img-overlay pt-2 pb-2">
                      <h2 className="card-title text-white pl-0 pr-0">About MRMI</h2>
                      <p className="card-text pr-0 pl-0">Mohammed Bin Rashid Al Maktoum Global Initiatives was inaugurated on 4 October 2015.</p>
                      <NavLink className="btn btn-arrow rounded-0 btn-md float-right" to="#" role="button"><i className="fas fa-chevron-right"></i></NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white">
                    <img src={pressData} className="card-img" alt="..."/>
                    <div className="card-img-overlay pt-2 pb-2">
                      <h3 className="card-title text-white pl-2 pr-2">Our Message</h3>
                      <p className="card-text pl-2 pr-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <NavLink className="btn btn-arrow rounded-0 btn-md float-right" to="#" role="button"><i className="fas fa-chevron-right"></i></NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white">
                    <img src={pressData} className="card-img" alt="..."/>
                    <div className="card-img-overlay pt-2 pb-2">
                      <h3 className="card-title text-white pl-2 pr-2">Our Vision, Mission & Goals</h3>
                      <p className="card-text pl-3 pr-3">VisionAl Jalila Foundation is a global philanthropic organisation.</p>
                      <NavLink className="btn btn-arrow rounded-0 btn-md float-right" to="#" role="button"><i className="fas fa-chevron-right"></i></NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    )
  }
}

export default NewsDetails;
