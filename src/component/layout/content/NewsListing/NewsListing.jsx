import React, { Component, Fragment } from "react";
import "./NewsListing.scss";
import { NavLink } from "react-router-dom";
import data from '../../../data/newsapi.json';
import Loader from "./../../../Loader";
import SortingList from "../../../SortingList";
class NewsListing extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      count: 8,
      defaultCount: 8,
      countLength: data.articles.length,
      dataSelection: [],
      loading: false
    };
  }
  searchSpace = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    }, () => {
        var searchId = document.getElementById('search_value').value;
        this.setState({ loading: false, search: searchId })  
    })
  }
  selectoption = (e) => {
    var dataColection = [];
    data.articles.map((data) => {
      if (data.sourceID == e.target.value) {
        return (dataColection.push(data))
      }
    })
    this.setState({
      loading: true
    }, () => {
        this.setState({ loading: false,dataSelection: dataColection });
    })
    
  }
  handleCount() {
    let count = this.state.defaultCount;
    count = count + this.state.count;
    this.setState({ count });
  }
  render() {
    const { loading } = this.state;
    return (
      <section className="pressRelease mb-5">
        <div className="breadcrumb-custom border-bottom">
          <nav aria-label="breadcrumb" className="navbar container">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><NavLink exact to="/">Home</NavLink></li>
              <li className="breadcrumb-item"><NavLink to="#">Media Center</NavLink></li>
              <li className="breadcrumb-item active" aria-current="page">Press Release</li>
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
          <div className="form-row">
            <div className="form-group col-lg-3">
              <select className="form-control" id="Select1"
                onChange={ this.selectoption } >
                <option value="all" defaultValue>All</option>
                {
                  data.sourceCategory.map((data) => {
                    return (
                      <Fragment key={data.id}>
                        <option value={ data.id }>{ data.name }</option>
                      </Fragment>
                    )
                  })
                }
              </select>
            </div>
            <div className="form-group col-lg-9">
              <form onSubmit={ (e) => this.searchSpace(e) }>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Title" id="search_value" aria-label="title" />
                <div className="input-group-append">
                  <button className="btn icon-search pl-4 pr-4" type="button" onClick={ (e) => this.searchSpace(e) } id="icon-search"><i className="fas fa-search fa-flip-horizontal icon-search"></i></button>
                  </div>
              </div>
              </form>
            </div>

          </div>
          <div className="row row-cols-1 row-cols-lg-4 mb-3">
            { loading === true ? <Loader /> : <SortingList data={ data } section="" search={ this.state.search } count={ this.state.count } selcetSearch={ this.state.dataSelection } />}
            </div>
            
          <button type="button" className={ this.state.count <= this.state.countLength ? "btn btn-loadMore rounded-0 btn-lg btn-block" : "displayNone"}id="btnLoad" onClick={ this.handleCount.bind(this) }>Load More</button>
        </div>
        </section>
    )
  }
}

export default NewsListing;
