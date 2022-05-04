import styles from './styles.module.css';
import Form from './Form';
import React from 'react';

function Create() {
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <h2>CREATE A NEW RECIPE</h2>
        <Form />
      </div>
    </div>
  )
}

export default Create