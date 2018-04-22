import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HasErrored from '../HasErrored/HasErrored';
import IsLoading from '../Loading/Loading';
import s from './NewsPage.css';

// import { fetchImages } from '../../actions/imageAction/imageAction';
import { fetchArticles } from '../../actions/newsAction/newsAction';


class NewsPage extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={s.news_container}>
          <IsLoading isLoading={this.props.isLoading} />
          <HasErrored hasErrored={this.props.hasErrored} />
          { this.renderArticles(this.props.articles) }
        </div>
        <Footer />
      </div>
    );
  }

  renderArticles(articles) {
    return articles.map((article, i) => (
      <div className={s.article_container} key={i}>
        <h1 className="header">{ article.header }</h1>
        { this.renderImage(article) }        
        <p className="paragraph">{ article.content }</p>
        <span className={s.clearfix}></span>
      </div>
    ))
  }

  renderImage(article) {
    if (article.image) {
      return (
        <div className={s.image_container}>
          <img src={ article.image.src} alt={ article.image.caption }/>        
        </div>
      )
    }
  }
  
  componentDidMount() {
    if (this.props.articles.length === 0) {
      this.props.getArticles('get_articles');
    }
  }
}

function mapStateToProps(state) {
  return {
    // comes from api call above for getArticles
    articles: state.articles,
    hasErrored: state.newsFetchError,
    isLoading: state.newsLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: (url) => dispatch(fetchArticles(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
