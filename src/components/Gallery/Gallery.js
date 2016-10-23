import React, { Component } from 'react';
import Photo from './../Photo/Photo';
import Stage from './../Stage/Stage';
import './Gallery.css'
class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            selectedPhoto: {},
            showStage: false
        };
        this.showSelectedPhoto = this.showSelectedPhoto.bind(this);
        this.hideStage = this.hideStage.bind(this);
    }
    showSelectedPhoto(selectedPhoto) {
        this.setState({
            selectedPhoto: selectedPhoto,
            stageStyle: {
                display: 'block'
            }
        });
    }
    hideStage() {
        this.setState({
            selectedPhoto: {},
            stageStyle: {
                display: 'none'
            }
        });
    }
    render() {
        let Photos = [];
        this.props.photos.forEach(photo => {
            Photos.push(<Photo key={photo.id} photo={photo} showSelectedPhoto={this.showSelectedPhoto}/>);
        });
        return (
            <main>
                <div className="stage-container" style={this.state.stageStyle} onClick={this.hideStage}>
                    <span className="closeStage" onClick={this.hideStage}>X</span>
                    <Stage selectedPhoto={this.state.selectedPhoto} show={this.state.showStage}/>
                </div>
                <div className="photos">
                        {Photos}
                </div>
            </main>
        );
    }
}
export default Gallery;