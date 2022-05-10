import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Card from './Card/';
import { getRecipes } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from './herramientas/filter';
import Fotter from './../Footer/index';
import Pages from '../Paginated';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
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

  return (
    <main>
      <div className={styles.title}>
        <div className={styles.henry}><h2>HENRY FOOD HENRY FOOD HENRY FOOD HENRY</h2></div>
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
                add={true}
                del={true}
              />
            </div>
          )
        })
      }</div>

      <Pages
        allRecipes={obj.flat().length}
        elements={cantidadRecetas}
        paginado={paginado}
        paginaActual={paginaActual}
      />

      <Fotter />
    </main>
  )
}

export default Home
