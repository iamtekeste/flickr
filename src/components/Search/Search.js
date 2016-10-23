import React, { Component } from 'react';
import './Search.css'
import _ from 'underscore';
import ReactDOM from 'react-dom';

class Search extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        // debouncing the handleChange to limit the API calls to Flickr
        this.handleChange = _.debounce(this.handleChange, 500);
 
    }
    componentDidMount() {
         ReactDOM.findDOMNode(this.refs.search).focus(); 
    }
    handleChange() {
        this.props.handleSearch(this.refs.search.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref="search" placeholder="Search Photos" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Search;