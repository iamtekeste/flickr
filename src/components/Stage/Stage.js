import React, {Component} from 'react';
import './Stage.css'

class Stage extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
        this.hideStage = this.hideStage.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

    hideStage() {
        
        this.setState({
                show: ! this.state.show
        });

        console.log(this.state)
        console.log('sta')
    }
    cancelClick(e) {
        e.stopPropagation();
    }
    render() {
        return (
            <div className="stage">
                <img id="selectedPhoto" src={this.props.selectedPhoto.url} alt={this.props.selectedPhoto.alt} onClick={this.cancelClick}/>
            </div>
        )
    }
}

export default Stage;