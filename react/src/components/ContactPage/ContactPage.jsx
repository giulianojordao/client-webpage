import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './ContactPage.css';

import { fetchImages } from '../../actions/imageAction/imageAction';
// import ImageLinks from '../ImageLinks/ImageLinks';

class ContactPage extends Component {
  render() {
    
    return (
      <div>
        <Navbar />
        <div className={styles.contact_container}>
          <h3>Management Representation</h3>
          <div className={styles.inner_container}>
            <h5>C & C Management - KJ Cash</h5>
            <div className={styles.info}>
              <i className="fas fa-home icon"></i><span className={['paragraph', styles.indent].join(' ')}>21515 Hawthorne Blvd Suite 200</span>
              <p className={['paragraph', styles.city].join(' ')}>Torrance, CA 90503</p>
              <br/>
              <i className="fas fa-phone icon"></i><span className={['paragraph', styles.indent].join(' ')}> 747-529-1674</span>
              <br/>
              <br/>
              <i className="fas fa-envelope icon"></i><span className={['paragraph', styles.indent].join(' ')}> Info@CCmgnt.com</span>
              <br/>
              <br/>
            </div>
          </div>
          <h3>Direct Contact</h3>
          <div className={styles.inner_container}>
            <div className={styles.info}>
              <i className="fas fa-envelope icon"></i><span className={['paragraph', styles.indent].join(' ')}> hanawuactor@gmail.com</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  componentDidMount() {
    if (this.props.images.length === 0) {
      this.props.getImages('https://unsplash.it/list/');
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


export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
