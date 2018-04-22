import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFound from './components/NotFound/NotFound';
import HomePage from './components/HomePage/HomePage';
import ReelsPage from './components/ReelsPage/ReelsPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import ResumePage from './components/ResumePage/ResumePage';
import NewsPage from './components/NewsPage/NewsPage';
import ContactPage from './components/ContactPage/ContactPage';

import { fetchImages } from './actions/imageAction/imageAction';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/reels" component={ReelsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }

  componentDidMount() {
    // this.props.getImages('get_images');
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: (url) => dispatch(fetchImages(url))
  }
}



export default connect(null, mapDispatchToProps)(App);

