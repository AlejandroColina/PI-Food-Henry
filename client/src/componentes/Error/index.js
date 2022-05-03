import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Error() {
  return (
    <div className={styles.container}>
      <h1>Page not found. <Link to='/'>Go to initial page</Link></h1>
    </div>
  )
}

export default Error