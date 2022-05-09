import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Card from './Card/';
import Pages from '../Paginated';
import { getRecipes } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from './herramientas/filter';
import Fotter from './../Footer/index';

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    dispatch(getRecipes());
    setLoading(false)
  }, [dispatch]);

  const { allRecipes, ordered } = useSelector(state => state);
  let obj = filter(allRecipes, ordered);

  const cantidadRecetas = 9;
  const [paginaActual, setPaginaActual] = useState(1);
  const ultimoIndex = paginaActual * cantidadRecetas;
  const inicioIndex = ultimoIndex - cantidadRecetas;

  let toRender = obj?.flat()?.slice(inicioIndex, ultimoIndex);
  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber)
  }

  if (loading) <h2>loading...</h2>

  return (
    <main>
      <div className={styles.title}>
        <div className={styles.henry}><h2>HENRY FOOD</h2></div>
        <div className={styles.henry}><h2>HENRY FOOD</h2></div>
        <div className={styles.henry}><h2>HENRY FOOD</h2></div>
      </div>

      <div className={styles.container}>{
        toRender.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Card
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                diets={recipe.diets}
                healthScore={recipe.healthScore}
                spoonacularScore={recipe.spoonacularScore}
              />
            </div>
          )
        })
      }</div>

      <Pages
        allRecipes={obj.flat().length}
        elements={cantidadRecetas}
        paginado={paginado}
      />
      <Fotter />
    </main>
  )
}

export default Home
