import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import * as ShelfAction from '../../actions/shelfAction';

const ImagePage = (props) => {

  const thumbnails = props.shelf.map((item, i) => {
    return (
      <li
        onClick={(e) => {props.ShelfAction.addToCart(item)}}
        key={i} className="col-xs-3 col-sm-2 col-md-1 list-item-small grow">
        <img
          className="img img-responsive"
          src={item.src}
          alt={item.name} />
      </li>
    )
  })

  const topThree = props.shelf.slice(0,3).map((item, i) => {
    return (
      <li
        key={i} className="col-sm-4 list-item-big">
        <div className="container-thirds overflow-scroll">
          <div className="col-sm-12">
            <img
              src={item.src}
              alt={item.name} />
            <h3>{item.name}</h3>
            <p className="justify">{item.description}</p>
          </div>
        </div>
      </li>

    )
  })



  return (
    <div>
      <Navbar />
      <div>
        <div className="row">
          <ul className="list-top">
            {topThree}
          </ul>
        </div>
        <div className="row">
          <ul className="list-bottom">
            {thumbnails}
          </ul>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state, prop) {
  return {
    //comes from initialState
    shelf: state.shelf
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ShelfAction: bindActionCreators(ShelfAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);