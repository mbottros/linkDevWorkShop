import React, { Component } from "react";
import "./home.scss";
import slide_1 from "./../../../../img/slide_1.png";
import helped from "./../../../../img/helped.png";
import boy from "./../../../../img/boy.png";
import zakat from "./../../../../img/zakat.png";
import awen from "./../../../../img/awen.png";
import flower from "./../../../../img/flower.png";
import flowers from "./../../../../img/flowers.png";
import medical from "./../../../../img/medical.png";
import scholarships from "./../../../../img/scholarships.png";
import { Link } from "react-router-dom";
import data from './../../../data/newsapi.json';
class Home extends Component {
  state = {};
  _sortingData(a, b) {
    return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
  }
  formatDate = (string,dataType) => {
    var options = "";
    if (dataType === "day") {
      options = { day: 'numeric'}
    } else if (dataType === "month") {
      options = { month: 'long' }
    } else if (dataType === "weekday") {
      options = { weekday: 'long' }
    } else if (dataType === "year") {
      options = { year: 'numeric' }
    }
    return new Date(string).toLocaleDateString([], options);
  }
  render() {
    data.articles.sort(this._sortingData).reverse();
    const articles = data.articles.map((data, index) => {
      if (data.showOnHomepage === true) {
        return (
          <div className="col-sm-6 col-lg-3 mb-3" key={ data.id }>
            <div className="card-deck">
              <div className="card h-auto text-white border-0 rounded-0">
                <img src={ data.urlToImage } className="card-img" alt="" />
                <div className="card-img-overlay">
                  <h2 className="card-title font-weight-bold mb-0">{ this.formatDate(data.publishedAt, 'day') }</h2>
                  <h3 className="card-title mb-0">{ this.formatDate(data.publishedAt, 'month') }</h3>
                  <p className="card-text">{ this.formatDate(data.publishedAt, 'weekday') } { this.formatDate(data.publishedAt, 'year') }</p>
                  <p className="card-text mt-3 mb-5 card-p">{ data.title }</p>
                  <Link to={ {
                    pathname: '/NewsDetails',
                    search: '?id=' + data.id + ''
                  } } className="card-link p-2">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })
    return (
      <div className="content">
        <section className="slider">
          <div id="carousel_1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ slide_1 } className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-lg-block">
                  <h5><span className="slideTitle">Al Jalila Foundation</span> is focused on inspiring the next generation of Emirati Healthcare professionals in the UAE.</h5>
                  <div className="mt-5">
                    <Link to="#" className="card-link text-uppercase text-white border p-2">Read More</Link>
                    <Link to="#" className="card-link text-white p-2 btn-donate">DONATE NOW</Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ slide_1 } className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-lg-block">
                  <h5><span className="slideTitle">Al Jalila Foundation</span> is focused on inspiring the next generation of Emirati Healthcare professionals in the UAE.</h5>
                  <div className="mt-5">
                    <Link to="#" className="card-link text-uppercase text-white border p-2">Read More</Link>
                    <Link to="#" className="card-link text-white p-2 btn-donate">DONATE NOW</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link className="carousel-control-prev" to="#carousel_1" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="#carousel_1" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </section>
        <section className="helped-slider text-center container mb-5">
          <h2 className="pt-5">How We Have Helped</h2>
          <p className="pb-3">See how Al Jalila Foundation have promoted change locally and to the world</p>
          <div id="carousel_2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block"></div>
                  <div className="col-sm-12 col-lg-4">
                    <div className="card border-0 text-center">
                      <img src={ helped } className="card-img-top" alt="..." />
                      <div className="card-img-overlay">
                        <div className="icon-circle"><i className="fas fa-graduation-cap fa-3x"></i></div>
                        <div className="card-body">
                          <h5 className="card-title">TA’ALOUF PROGRAM</h5>
                          <h1 className="mt-3 font-weight-bold">200</h1>
                          <h5 className="card-title">GRADUATES TO DATE</h5>
                          <p className="card-text">Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-sm-12 col-lg-4">
                    <div className="card border-0 text-center">
                      <img src={ helped } className="card-img-top" alt="helped" />
                      <div className="card-img-overlay">
                        <div className="icon-circle"><i className="fas fa-graduation-cap fa-3x"></i></div>
                        <div className="card-body">
                          <h5 className="card-title">TA’ALOUF PROGRAM</h5>
                          <h1 className="mt-3 font-weight-bold">200</h1>
                          <h5 className="card-title">GRADUATES TO DATE</h5>
                          <p className="card-text">Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-2 d-none d-lg-block"></div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block"></div>
                  <div className="col-sm-12 col-lg-4">
                    <div className="card border-0 text-center">
                      <img src={ helped } className="card-img-top" alt="..." />
                      <div className="card-img-overlay">
                        <div className="icon-circle"><i className="fas fa-graduation-cap fa-3x"></i></div>
                        <div className="card-body">
                          <h5 className="card-title">TA’ALOUF PROGRAM</h5>
                          <h1 className="mt-3 font-weight-bold">200</h1>
                          <h5 className="card-title">GRADUATES TO DATE</h5>
                          <p className="card-text">Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-sm-12 col-lg-4">
                    <div className="card border-0 text-center">
                      <img src={ helped } className="card-img-top" alt="helped" />
                      <div className="card-img-overlay">
                        <div className="icon-circle"><i className="fas fa-graduation-cap fa-3x"></i></div>
                        <div className="card-body">
                          <h5 className="card-title">TA’ALOUF PROGRAM</h5>
                          <h1 className="mt-3 font-weight-bold">200</h1>
                          <h5 className="card-title">GRADUATES TO DATE</h5>
                          <p className="card-text">Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-2 d-none d-lg-block"></div>
                </div>
              </div>
            </div>
            <Link className="carousel-control-prev" to="#carousel_2" role="button" data-slide="prev">
              <span className="fa-stack fa-2x text-green">
                <i className="far fa-circle fa-stack-2x"></i>
                <i className="fas fa-chevron-left fa-stack-1x"></i>
              </span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="#carousel_2" role="button" data-slide="next">
              <span className="fa-stack fa-2x text-green">
                <i className="far fa-circle fa-stack-2x"></i>
                <i className="fas fa-chevron-right fa-stack-1x"></i>
              </span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </section>
        <section className="supportPrograms">
          <div className="card text-center text-white">
            <div className="container">
              <h5 className="card-title">Today’s Investments, Tomorrow’s Cures</h5>
              <p className="card-text">Support the different programs we have below</p>
              <div className="row diamondTop mb-4 mb-lg-0">
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="diamond">
                    <div className="diamond-inner">
                      <img src={ boy } alt="boy" />
                      <p className="mt-3">Ta’alouf</p>
                      <i className="fas fa-plus fa-1x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="diamond">
                    <div className="diamond-inner">
                      <img src={ awen } alt="A’awen" />
                      <p className="mt-3">A’awen</p>
                      <i className="fas fa-plus fa-1x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="diamond">
                    <div className="diamond-inner">
                      <img src={ scholarships } alt="Scholarships" />
                      <p className="mt-3">Scholarships</p>
                      <i className="fas fa-plus fa-1x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="diamond">
                    <div className="diamond-inner">
                      <img src={ medical } alt="Medical Research" />
                      <p className="mt-3">Medical Research</p>
                      <i className="fas fa-plus fa-1x"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row diamond-bottom mb-4 mb-lg-0">
                <div className="col-sm-6 d-none d-lg-block col-lg-1"></div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="diamond diamond_1">
                    <div className="diamond-inner">
                      <img src={ zakat } alt="zakat" />
                      <p className="mt-3">Zakat</p>
                      <i className="fas fa-plus fa-1x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 d-none d-lg-block col-lg-1"></div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="diamond diamond_2">
                    <div className="diamond-inner">
                      <img src={ flower } alt="Fundraising" />
                      <p className="mt-3">Fundraising</p>
                      <i className="fas fa-plus fa-1x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 d-none d-lg-block col-lg-1"></div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="diamond diamond_3">
                    <div className="diamond-inner">
                      <img src={ flowers } alt="Omniyat Dania" />
                      <p className="mt-3">Omniyat Dania</p>
                      <i className="fas fa-plus fa-1x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ourLatest mb-5">
          <div className="container">
            <p className="card-text card-latest mb-0 text-center">Our Latest</p>
            <h3 className="card-title card-press text-center mb-5"><Link to="/NewsListing">Press Release</Link></h3>
            <div className="row no-gutters">
              { articles }
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Home;
