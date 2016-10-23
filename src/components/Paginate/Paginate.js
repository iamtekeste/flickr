import React, { Component } from 'react';
import './Paginate.css';
class Paginate extends Component {
    constructor() {
        super();
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort() {
        this.props.handleSort(this.refs.sort.value);
    }

    render() {
        return (
            <div className="paginations">
                <button className="previous">Previous</button>
                <button className="next">Next</button>
            </div>
        );
    }
}

export default Paginate;