import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div key={props.id} className={styles.container}>
      <img src={props.image} alt={props.title}/>

      <div className={styles.divInfo}>

        <div className={styles.divInfoOne}>
          <Link className={styles.link} to={`/detail/${props.id}`} ><h4>{props.title}</h4></Link>
          <p>Health score: {props.healthScore}</p>
          <p>Spoon score: {props.spoonacularScore}</p>
        </div>
        <div className={styles.divInfoOne}>
          <p><b>Dietas: </b>{props.diets}</p>
        </div>

      </div>
    </div>
  )
}

export default Card