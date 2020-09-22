import React, { Component} from 'react'
import { Link } from "react-router-dom";
import Loader from "./Loader";
export default class sortingList extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: true }) ,1000)
  }
    _sortingData(a, b) {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    }
  formatDate = (string, dataType) => {
    var options = "";
    if (dataType === "day") {
      options = { day: 'numeric' }
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
    const count = this.props.count;
    if (this.state.loading === false) {
      return <Loader />
    }
  
    if (this.props.search === null && this.props.selcetSearch.length !== 0) {

      const articles =  this.props.selcetSearch.map((data, key) => {
        return (
          <div className="col-sm-6 col-md-3 mb-3" key={ data.id }>
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
      })
      this.props.data.articles.sort(this._sortingData).reverse();
      return articles
    } else {
      const articles = this.props.data.articles.filter((data) => {
        if (this.props.search === null && this.props.selcetSearch.length === 0) {
          return data;
        }
        
        else if (data.title.toLowerCase().includes(this.props.search.toLowerCase())) {
          return data
        }
      }).map((data, index) => {
          if (index < count) {
            return (
              <div className="col-sm-6 col-md-3 mb-3" key={ data.id }>
                <div className="card-deck">
                  <div className="card h-auto text-white border-0 rounded-0">
                    <img src={ data.urlToImage } className="card-img" alt="" />
                    <div className="card-img-overlay">
                      <h2 className="card-title font-weight-bold mb-0">{ this.formatDate(data.publishedAt, 'day') }</h2>
                      <h3 className="card-title mb-0">{ this.formatDate(data.publishedAt, 'month') }</h3>
                      <p className="card-text">{ this.formatDate(data.publishedAt, 'weekday') } { this.formatDate(data.publishedAt, 'year') }</p>
                      <p className="card-text mt-3 mb-5 card-p">{ data.title.substring(0, 100) }{ data.title.length > 100 && "..." }</p>
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
      });
      this.props.data.articles.sort(this._sortingData).reverse();
      return articles
      }
  }
}
