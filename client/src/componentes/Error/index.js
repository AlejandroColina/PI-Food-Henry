import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Error() {
  return (
    <div className={styles.notFound}>
      <Link className={styles.linkError} to='/start'><h1 className={styles.intro} >Go to initial page</h1></Link>
    </div>
  )
}

export default Error