import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Card from './Card/';
import Pages from '../Paginated';
import { getRecipes } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from './herramientas/filter';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const { allRecipes, ordered } = useSelector(state => state);
  let obj = filter(allRecipes, ordered);

  const [paginaActual, setPaginaActual] = useState(1);
  const cantidadRecetas = 9; /*, setRecipesNumber] = useState(9);*/
  const ultimoIndex = paginaActual * cantidadRecetas;
  const inicioIndex = ultimoIndex - cantidadRecetas;

  let toRender = obj?.flat()?.slice(inicioIndex, ultimoIndex);

  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber)
  }

  return (
    <main>

      <div className={styles.title}><h1>HENRY FOOD</h1></div>

      <div className={styles.container}>{
        toRender.map((recipe) => {
          return (
            <div className={'a'} key={recipe.id}>
              <Card
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

    </main>
  )
}

export default Home
