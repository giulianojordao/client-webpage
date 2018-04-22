import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './NotFound.css';

const NotFound = () => (
  <div>
    <Navbar />
    <h1 className={styles.header}>Not Found</h1>
  </div>
)

export default NotFound;