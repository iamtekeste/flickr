import React, { Component } from 'react';
import './App.css';
import Utils from './../../Utils';
import Search from './../Search/Search';
import Sort from './../Sort/Sort';
import Paginate from './../Paginate/Paginate';
import Gallery from './../Gallery/Gallery';

class App extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.state = {
      currentPage: 1,
      searchText: '',
      sort: 'date-posted-desc',
      photos: []
    };
  }
  componentDidMount() {
    // let the games begin!
     this.getPhotosFromFlickr();
  }
  getPhotosFromFlickr() {
    let userId = Utils.userId;
    let photosURL = `${Utils.baseURL}&user_id=${userId}&method=flickr.photos.search&text=${this.state.searchText}&per_page=25&sort=${this.state.sort}`;

    fetch(photosURL)
        .then(response => {
          return response.json();
        })
        .then(jsonResponse => {
            let photos = jsonResponse.photos
            this.setState({photos: photos.photo, currentPage: photos.page});
        });
  }
  handleSearch(searchText) {
    this.setState({searchText: searchText});
    this.getPhotosFromFlickr();
  }
  handleSort(sort) {
    this.setState({sort: sort});
    this.getPhotosFromFlickr();
  }
  handlePagination(currentPage) {
    this.setState({
      currentPage:currentPage
    });
   this.getPhotosFromFlickr();
  }
  render() {
    if(this.state.photos.length === 0)
      return (
        <div className="App">
          <Search handleSearch={this.handleSearch}/>
          <h1> Oops! please try again.</h1>
      </div>
      );
    return (
      <div className="App">
        <div className="App-header">
          <Search handleSearch={this.handleSearch}/>
        </div>
        <div className="content">
          <div className="paginate-sort">
            <Sort handleSort={this.handleSort}/>
            <Paginate handlePagination={this.handlePagination} />
          </div>
          <Gallery photos={this.state.photos} />
        </div>
      </div>
    );
  }
}

export default App;
