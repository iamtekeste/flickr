import React, { Component } from 'react';
import Utils from '../../Utils';

class Photo extends Component {

    constructor() {
        super();
        this.state = {
            sizes: {}
        }
        this.showLargePhoto = this.showLargePhoto.bind(this);
    }
    componentDidMount() {
        let sizes = this.buildPhotoURL(this.props.photo);
        this.setState({
            sizes: sizes
        })
    }
    buildPhotoURL(photo) {
        // this.getPhotoSizes(photo.id);
        let baseURL = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
       
        return {
            small: `${baseURL}_q.jpg`,
            medium500: `${baseURL}.jpg`,
            medium640: `${baseURL}_z.jpg`,
            large: `${baseURL}_b.jpg`
        }
    }
    showLargePhoto() {
        let selectedPhoto = {
            url: this.state.sizes.large,
            alt: this.props.photo.title
        }
        this.props.showSelectedPhoto(selectedPhoto);
    }
    getPhotoSizes(id) {
        let apiURL = `${Utils.baseURL}&method=flickr.photos.getSizes&photo_id=${id}`;
        fetch(apiURL)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                console.log(jsonResponse);
            })
    }

    render() {
        let photo = this.props.photo;
        // let photoURL = this.buildPhotoURL(photo);
        return (
            <div className="thumbnail">
                    <img src={this.state.sizes.medium500} alt={photo.title} onClick={this.showLargePhoto}/>
                    <div className="caption">{photo.title}</div>
            </div>
        )
    }
}

export default Photo;