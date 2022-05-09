import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import photo from '.././media/photo.png';
function Card(props) {
  return (
    <Link className={styles.link} to={`/detail/${props.id}`}>
      <div key={props.id} className={styles.container}>
        <img src={props.image ? props.image : photo} alt={props.title} />

        <div className={styles.divInfo}>

          <div className={styles.divInfoOne}>
            <h3>{props.title}</h3>
            <section className={styles.credits}>
              <p> 🤍 {props.healthScore}</p>
              <p> ⭐ {props.spoonacularScore}</p>
            </section>
          </div>
          <div className={styles.divInfoOne}>
            <p>
              {props.diets?.map((diet) => `| ${diet}   `)}
            </p>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default Card