import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import photo from '.././media/photo.png';
import Delete from '../Delete';
import Favorite from '../AddFavorite';

function Card(props) {
  return (
    <div key={props.id} className={styles.container}>
      <img src={props.image ? props.image : photo} alt={props.title} />
      <section className={styles.delAdd}>
        {props.del ? <Delete id={props.id}/> : ''}
        {props.add ? <Favorite id={props.id} />: ''}
        
      </section>
      <div className={styles.divInfo}>
        <Link className={styles.link} to={`/detailrecipe/${props.id}`}>

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

        </Link>
      </div>
    </div>
  )
}

export default Card