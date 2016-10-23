import React, { Component } from 'react';

class Sort extends Component {
    constructor() {
        super();
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort() {
        this.props.handleSort(this.refs.sort.value);
    }

    render() {
        return (
            <div>
                <select  onChange={this.handleSort} ref="sort">
                    <option value="date-posted-desc">Date posted - Desc</option>
                    <option value="date-posted-asc">Date posted - Asc</option>
                    <option value="relevance">Relevance</option>
                    <option value="interestingness-desc">Interestingness - Desc</option>
                    <option value="interestingness-asc">Interestingness - Asc</option>
                    <option value="date-taken-desc">Date taken - Desc</option>
                    <option value="date-taken-asc">Date taken - Asc</option>
                </select>
            </div>
        );
    }
}

export default Sort;