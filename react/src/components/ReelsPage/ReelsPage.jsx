import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HasErrored from '../HasErrored/HasErrored';
import IsLoading from '../Loading/Loading';

import s from './ReelsPage.css';

import { fetchReels } from '../../actions/reelsAction/reelsAction';


class ReelsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <IsLoading isLoading={this.props.isLoading} />
        <HasErrored hasErrored={this.props.hasErrored} />

        <div className={s.reels_container}>
          <div className={s.primary_reel}>
            { this.renderReels(this.props.reels.slice(0,1)) }
          </div>
          <div className={s.secondary_reels}>
            { this.renderReels(this.props.reels.slice(1)) }
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  renderReels(reels) {
    return reels.map((reel, i) => (
      <div className={s.reel_group} key={i}>
        <iframe
          title={reel.title}
          src={reel.src}
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen="true">
        </iframe>
        <h1 className={[s.reel_title].join(' ')}>{reel.title}</h1>
      </div>
    ))
  }

  componentDidMount() {
    if (this.props.reels.length === 0) {
      this.props.getReels('get_reels');
    }
  }
}

function mapStateToProps(state) {
  return {
    // comes from api call above for getReels
    reels: state.reels,
    hasErrored: state.reelsFetchError,
    isLoading: state.reelsLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getReels: (url) => dispatch(fetchReels(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReelsPage);
