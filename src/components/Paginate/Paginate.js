import React, { Component } from 'react';
import './Paginate.css';
class Paginate extends Component {
    constructor() {
        super();
        this.handlePagination = this.handlePagination.bind(this);
        this.state = {
            nextDisabled: false,
            previousDisabled: false
        }
    }
    componentDidMount() {
        //check here if we need to disable the buttons
        
    }
    handlePagination(event) {
        let changeBy = +event.target.value;
        this.props.handlePagination(changeBy);
    }

    render() {
        return (
            <div className="paginations">
                <button className="previous" onClick={this.handlePagination} value="-1">Previous</button>
                <button className="next" onClick={this.handlePagination} value="1">Next</button>
            </div>
        );
    }
}

export default Paginate;