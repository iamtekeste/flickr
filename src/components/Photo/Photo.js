import React, { Component } from 'react';
import Utils from '../../Utils';

class Photo extends Component {
    buildPhotoURL(photo) {
        //this.getPhotoSizes(photo.id);
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`
    }
    getPhotoSizes(id) {
        let apiURL = `${Utils.baseURL}&api_key=${Utils.apiKey}&method=flickr.photos.getSizes&photo_id=${id}`;
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
        let photoURL = this.buildPhotoURL(photo)
        return (
            <div className="thumbnail">
                <img src={photoURL} alt={photo.title} />
            </div>
        )
    }
}

export default Photo;