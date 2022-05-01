import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Card from './Card/Card';
import { getRecipes, clearPage} from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from './herramientas/filter';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes())
    return ()=>{
      dispatch(clearPage())
      console.log('dismount HOME')
    }
  }, [dispatch]);

  const { allRecipes } = useSelector(state=>state);
  let option = 'BAJOSPUNTAJES';  //option:  ASC, DESC, ALTASRECETAS, BAJASRECETAS, ALTOSPUNTAJES, BAJOSPUNTAJES
  let obj = filter(allRecipes, option);  

  return (
    <main>

      <div className={styles.title}><h1>HENRY FOOD</h1></div>

      <div className={styles.container}>{
        obj?.flat()?.map((recipe) => {
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

    </main>
  )
}

export default Home