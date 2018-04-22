import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HasErrored from '../HasErrored/HasErrored';
import IsLoading from '../Loading/Loading';
import s from './GalleryPage.css';


import { fetchImages } from '../../actions/imageAction/imageAction';


class GalleryPage extends Component {
  constructor() {
    super();
    this.state = {
      'selectedImage': {
        'galleryName': '',
        'imageIndex': 0
      },
      'showModal': false,
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className={s.main_container}>
          <IsLoading isLoading={this.props.isLoading} />
          <HasErrored hasErrored={this.props.hasErrored} />
          { this.renderGalleries(this.props.images) }
        </div>
        { this.renderModal(this.state.selectedImage.galleryName, this.state.selectedImage.imageIndex) }
        <Footer />
      </div>
    );
  }

  renderGalleries(galleries) {
    return Object.keys(galleries).map((gallery, i) => (
      <div className={s.gallery_container} key={i}>
        <h1 className="header">{ gallery }</h1>
        { this.renderGalleryImages(galleries[gallery], gallery) }
      </div>
    ))
  }

  renderGalleryImages(gallery, galleryName) {
    return gallery.map((image, i) => {
      return (
        <div 
          className={[s.gallery_image_container, s.cursor].join(' ')} 
          onClick={ (e) => this.toggleModal(galleryName, i) }
          key={i}
        >
          <img 
            src={image.src} 
            className={[s.gallery_image].join(' ')} 
            alt={ image.caption } />
          <div
            className={[s.gallery_image_black].join(' ')}>
          </div>
        </div>
      )
    })
  }

  getViewportWidth() {
    let e = window;
    let a = 'inner';
    if ( !( 'innerWidth' in window ) ) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return e[ a +'Width' ]
  }

  renderModal(galleryName, selectedImageIdx) {
    
    let modal = [s.modal];
    let modalContent = [s.modal_content];
    // let modal = [s.modal, s.modal_hide];
    // let modalContent = [s.modal_content, s.modal_hide];
    // if (this.state.showModal) {
    //   modal = [s.modal, s.modal_show];
    //   modalContent = [s.modal_content, s.modal_show];
    // } 
    if (!this.state.showModal) return
    
    return (
      <div className={ modal.join(' ') }>
        <div className={ modalContent.join(' ') }>
          <span className={[s.close, s.cursor].join(' ')} onClick={ (e) => this.toggleModal(0) }>&times;</span>
          { this.renderModalImage(this.props.images[galleryName], selectedImageIdx) }
          <a className={s.prev} onClick={ (e) => this.onArrowClick(galleryName, -1) }>&#10094;</a>
          <a className={s.next} onClick={ (e) => this.onArrowClick(galleryName, 1) }>&#10095;</a>
          <div className={s.thumbnails_container}>
            { this.renderThumbnails(galleryName) }      
          </div>
        </div>
      </div>
    )
  }

  renderModalImage(images, i) {
    if (!images) return
    let image = images[i];
    return (
      <div className={s.modal_image_container} key={i}>
        <div className={s.image_numbering}>
          {i + 1} / { images.length }
        </div>
        <img src={image.src} alt={ image.caption } />
        <div className={s.caption_container}>
          <p>{ image.caption } </p>
        </div>
      </div>
    )
  }

  renderThumbnails(galleryName) {
    if (!this.props.images[galleryName]) return

    return this.props.images[galleryName].map((image, i) => {
      let imageStyles = [s.thumbnail, s.cursor]
      if (this.state.selectedImage.imageIndex === i) {
        imageStyles.push(s.active)
      }
      return (
        <div className={s.thumbnail_column} key={i}>
          <img 
            src={image.src}  
            onClick={ (e) => this.setSelectedImage(galleryName, i) } 
            className={imageStyles.join(' ')} 
            alt={ image.caption } />
        </div>
      )
    })
  }

  toggleModal(galleryName, i) {
    // only show modal on desktop
    if (this.getViewportWidth() < 1060) return

    this.setSelectedImage(galleryName, i);
    this.setState({
      "showModal": !this.state.showModal
    });
  }

  setSelectedImage(galleryName, i) {
    this.setState({
      "selectedImage": {
        "galleryName": galleryName,
        "imageIndex": i
      }
    })
  }

  onArrowClick(galleryName, n) {
    let selectedImage = this.state.selectedImage.imageIndex;
    let galleryLength = this.props.images[galleryName].length
    let newIndex = selectedImage += n;

    if (newIndex > galleryLength - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = galleryLength - 1;
    }
    this.setSelectedImage(galleryName, newIndex);
  }

  componentDidMount() {
    if (Object.keys(this.props.images).length === 0) {
      this.props.getImages('get_images');
    }
  }
}

function mapStateToProps(state) {
  return {
    // comes from api call above for getImages
    images: state.images,
    hasErrored: state.imageFetchError,
    isLoading: state.imagesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: (url) => dispatch(fetchImages(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
