import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Card from './Card/Card';
import { getRecipes } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch]);

  const { allRecipes } = useSelector(state=>state);

  return (
    <main>

      <div className={styles.title}><h1>HENRY FOOD</h1></div>

      <div className={styles.container}>{
        allRecipes?.flat()?.map((recipe) => {
          return (
            <div className={'a'}>
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

    </main>
  )
}

export default Home