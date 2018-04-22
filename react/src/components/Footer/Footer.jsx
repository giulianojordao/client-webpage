import React from 'react';
import s from './Footer.css';


const Footer = () => {
  return (
    <div>
      <div className={s.padding_container}></div>
      <ul className={s.profile_links}>
        <li><a href="http://www.imdb.com/name/nm8726026/">IMBD</a></li>
        <div className={s.vertical_line}></div>
        <li><a href="http://resumes.actorsaccess.com/hanawu">Actors Access</a></li>
        <div className={s.vertical_line}></div>
        <li><a href="http://www.lacasting.com/hanawu">LA Casting</a></li>
      </ul>
    </div>
  );
}

export default Footer
  
