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
      pages: 0,
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
    let photosURL = `${Utils.baseURL}&user_id=${userId}&method=flickr.photos.search&text=${this.state.searchText}&page=${this.state.currentPage}&per_page=25&sort=${this.state.sort}`;
    fetch(photosURL)
        .then(response => {
          return response.json();
        })
        .then(jsonResponse => {
            let photos = jsonResponse.photos;
            this.setState({
              photos: photos.photo, 
              currentPage: photos.page, 
              pages: photos.pages
            });
        });
  }
  handleSearch(searchText) {
    this.setState({searchText: searchText, currentPage:1},() => {
      this.getPhotosFromFlickr();
    });
    
  }
  handleSort(sort) {
    this.setState({sort: sort}, () => {
      this.getPhotosFromFlickr();
    });
  }
  handlePagination(changeBy) {
    let currentPage = this.state.currentPage + changeBy > 1 ? this.state.currentPage + changeBy : 1;
    this.setState({
      currentPage: currentPage
    },() => {
       this.getPhotosFromFlickr();
    });
  }
  render() {
    let paginationData = {
      pages: this.state.pages,
      currentPage: this.state.currentPage
    }

    return (
      <div className="App">
        <div className="App-header">
          <Search handleSearch={this.handleSearch}/>
        </div>
        <div className="content">
          <div className="paginate-sort">
            <Sort handleSort={this.handleSort}/>
            <Paginate handlePagination={this.handlePagination} paginationData={paginationData}/>
          </div>
          <Gallery photos={this.state.photos} />
        </div>
      </div>
    );
  }
}

export default App;
