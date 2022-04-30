import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetail } from './../../redux/action';
import styles from './styles.module.css';

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id])
  const { details } = useSelector(state => state);

  return (
    <>
      <main className={styles.principal} >

        <div className={styles.container}>

        <h1>{details.title}</h1>
          <div className={styles.detailOne}>
            <img src={details.image} alt={details.title} />
            <div className={styles.divDetailOne}>
              <div className={styles.divDetailOneP}>
                <h4><li>Tipos de plato de la receta:</li></h4>
                <p>{details.dishTypes}</p>
              </div>

              <div className={styles.divDetailOneP}>
                <h4><li> Tipos de dieta de la receta:</li></h4>
                <p>{details.diets}</p>
              </div>
            </div>

          </div>

          <div className={styles.detailTwo}>
            <hr/>
            <h3><i>Resúmen del plato</i></h3>
            <p>{details.summary}</p>
            <p>Puntuación: {details.spoonacularScore}</p>
            <p>Nivel de comida saludable: {details.healthScore}</p>
            <h3><i>Paso a paso</i></h3>
            <p>{details.steps}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Details