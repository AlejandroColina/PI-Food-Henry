import React from 'react';
import styles from './styles.module.css';

function Card(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.title}/>

      <div className={styles.divInfo}>

        <div className={styles.divInfoOne}>
          <h4>{props.title}CARNE</h4>
          <p>Health score: {props.healthScore}</p>
          <p>Spoon score: {props.spoonacularScore}</p>
        </div>
        <div className={styles.divInfoOne}>
          <p><b>Dietas: </b>holaholaholaholahola{props.diets}</p>
        </div>

      </div>
    </div>
  )
}

export default Card