import React, { Component } from 'react';
import Photo from './../Photo/Photo';
import './Gallery.css'
class Gallery extends Component {

    render() {
        let Photos = [];
        this.props.photos.forEach(photo => {
            Photos.push(<Photo key={photo.id} photo={photo} />);
        });
        return (
           <div className="photos">
                {Photos}
           </div>
        );
    }
}
export default Gallery;