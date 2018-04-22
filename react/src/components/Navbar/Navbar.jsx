import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../images/Banner.jpg';
import s from './Navbar.css';


export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      'links': ['Home', 'Reels', 'Gallery', 'Resume', 'News', 'Contact'],
      'sideNavOpen': false,
      'nav_ul_style': [s.nav_ul],
    }
  }

  render() {
    return (
      <nav className={[s.nav].join(' ')}>
        <img id="navbar-header-img" className={s.header_img} src={Banner} alt="Banner"></img>

        <div className={s.social_container}>
          <a href="https://www.instagram.com/heyhanawu"><i className="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com/heyhanawu"><i className="fab fa-twitter"></i></a> 
          <a href="https://facebook.com/ohheyhanawu"><i className="fab fa-facebook"></i></a>
          <h1>HANA WU</h1>
          <div className={s.sub_header}>
            <h3>actress</h3>
            <i className={[s.circle, "fas fa-circle"].join(' ')}></i>
            <h3>singer</h3>
          </div>
        </div>

        <ul className={s.nav_ul_mobile}>
          <li className={s.left}><a href="https://www.instagram.com/heyhanawu"><i className="fab fa-instagram"></i></a></li>
          <li className={s.left}><a href="https://www.twitter.com/heyhanawu"><i className="fab fa-twitter"></i></a></li> 
          <li className={s.left}><a href="https://facebook.com/ohheyhanawu"><i className="fab fa-facebook"></i></a></li>
          <li className={s.right}><button onClick={ (e) => this.toggleSideNav() } className={s.menu_bars}><i className="fas fa-bars"></i></button></li>
        </ul>
        <hr className={s.mobile_nav_line} />
        <div className={s.nav_ul_container}>
          <ul className={ this.state.nav_ul_style.join(' ') }>
            { this.renderLinks(this.state.links) }
          </ul>
        </div>

      </nav>
    )
  }

  toggleSideNav() {
    let sideNavOpen = this.state.sideNavOpen;
    this.setState({
      'sideNavOpen': !sideNavOpen,
      'nav_ul_style': sideNavOpen ? [s.nav_ul] : [s.nav_ul, s.nav_ul_show]
    })
  }

  renderLinks(links) {    
    return links.map((link, i) => {
      let route;
      if (link === 'Home') {
        route = '/';
      } else {
        route = '/' + link.toLowerCase();
      }
      return ( 
        <li className={[s.link_right].join(' ')} key={i}><NavLink className={s.link} activeClassName={s.active} exact to={route} >{ link }</NavLink></li>
      )
    })
  }

}