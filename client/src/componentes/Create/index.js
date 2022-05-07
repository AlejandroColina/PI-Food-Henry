import styles from './styles.module.css';
import Form from './Form';
import React from 'react';
import { Link } from 'react-router-dom';

function Create() {
  return (
    <div className={styles.container}> 
    <div className={styles.navbar}>
      <Link className={styles.link} to='/home'>ALL RECIPES</Link>
    </div>
      <div className={styles.root}>
        <h2>CREATE A NEW RECIPE</h2>
        <Form />
      </div>
    </div >
  )
}

export default Create