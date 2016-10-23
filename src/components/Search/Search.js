import React, { Component } from 'react';
import _ from 'underscore';

class Search extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        // debouncing the handleChange to limit the API calls to Flickr
        this.handleChange = _.debounce(this.handleChange, 500);
 
    }
    handleChange() {
        this.props.handleSearch(this.refs.search.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref="search" placeholder="search" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Search;