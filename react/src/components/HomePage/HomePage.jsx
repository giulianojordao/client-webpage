import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { fetchImages, preloadImages } from '../../actions/imageAction/imageAction';
import styles from './HomePage.css';
import Headshot from '../../images/homepage_headshot.jpg';

class HomePage extends Component {
  render() {  
    return (
      <div>
        <Navbar />
        <div className={styles.body_container}>
        
          <div className={[styles.content_container, styles.left].join(' ')}>
            <h1 className="header">Bio</h1>
            <p className="paragraph">Hey, I’m Hana. Born in Taiwan and grown in San Jose, CA, I spent most of my life pursuing the stable and conventional career path before leaving it all behind to chase my lifelong love of acting.</p> 
            <br/>
            <p className="paragraph">I hold a BA in Sociology from the UC Berkeley, an MA in Clinical Psychology from Antioch University, Santa Barbara, and I am an actual Licensed Marriage and Family Therapist. Wut. That means that, for a while, I had the great privilege of listening to and holding people’s stories. 
            Now, as an actor, I get to be part of storytelling. </p>
            <br/>
            <br/>
            <h5 className="paragraph">Working Goals:</h5>
            <ol className={styles.bio_ordered_list}>
              <li className="paragraph">Be in a Wong Fu production.</li>
              <li className="paragraph">Be on a doctor/detective/psychological thriller/superhero show.</li>
              <li className="paragraph">Be in an action film where I get to do wire work. </li>
              <li className="paragraph">Meet Eugene from the Try Guys.</li>
              <li className="paragraph">Swim with manatees.</li>
            </ol>
          </div>

          <div className={[styles.content_container, styles.right].join(' ')}>
            <img id="homepage-headshot" src={Headshot} alt="Headshot"/>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
  
  componentDidMount() {
    // componentDidMount runs after virtual DOM painted but not the actual DOM
    // Thus, we listen/wait for the actual DOM to fully render 
    // before making precache api calls otherwise it will slow down homepage rendering
    this.waitForImagesToPaint();
  }

  waitForImagesToPaint() {
    let homepageHeadshot = document.getElementById('homepage-headshot');
    let navbarHeaderImg = document.getElementById('navbar-header-img');
    let interval = setInterval((e) => {
      if (!homepageHeadshot.complete || !navbarHeaderImg.complete) {
        // console.log('not complete')
      } else {
        this.getImagesForPreCache();
        clearInterval(interval)
      }
    }, 1000)
  }
  
  getImagesForPreCache() {
    // get images here so when navigating to gallery page they appear instantly
    if (Object.keys(this.props.images).length > 0) return
    this.props.getImages('get_images').then((images) => {
      // console.log('getting images in homepage')
      this.preloadImages(this.props.images)
    }).catch((e) => {
      console.log(`error caching images: ${e}`)
    })
  }

  preloadImages(images) {
    let cachedImages = {}
    Object.keys(images).forEach((key, i) => {
      let imagesArray = images[key].map((image, i) => {
        let cachedImage = new Image();
        cachedImage.src = image.src;
        cachedImage.caption = image.caption;
        return cachedImage;
      })
      cachedImages[key] = imagesArray
    })
 
    this.props.updateImages(cachedImages)
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
    getImages: (url) => dispatch(fetchImages(url)),
    updateImages: (images) => dispatch(preloadImages(images))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
