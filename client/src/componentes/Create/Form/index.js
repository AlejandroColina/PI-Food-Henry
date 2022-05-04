import React, { useState } from 'react';
// import axios from 'axios';
import styles from './styles.module.css';
import Diets from '../Diets';

function Form() {

  const [input, setInput] = useState({
    title: '',
    steps: '',
    summary: '',
    spoonacularScore: 0,
    healthScore: 0,
    diets: [1]
  });

  //   console.log(input.title)
  //   console.log(input.steps)
  //   console.log(input.summary)
  //   console.log(input.spoonacularScore)
  //   console.log(input.healthScore)  
  
  const handleChange = (e) => {
    setInput(() => {
      const review = {
        ...input,
        [e.target.name]: e.target.value
      }
      return review
    });
  }

  const onPressButton = (e) => {
    e.preventDefault()

    // axios.post('http://localhost:3001/recipe', {
    //   "title": input.title,
    //   "steps": input.steps,
    //   "summary": input.summary,
    //   "spoonacularScore": input.spoonacularScore,
    //   "healthScore": input.healthScore,
    //   "diets": input.diets
    // }
    // )
    //   .then(res => console.log(res.data))
  }
  return (
    <form onSubmit={onPressButton}>
      <div className={styles.generalityOne}>
        <div className={styles.divUnoForm}>
          <div className={styles.prueba}>
            <label htmlFor='title'>Ingresa un nombre para la receta</label>
            <input onChange={handleChange} type='text' name='title' placeholder='title...' />
          </div>

          <div className={styles.prueba}>
            <label htmlFor='steps'>Paso a paso</label>
            <input onChange={handleChange} type='textarea' name='steps' placeholder='steps...' />
          </div>

          <div className={styles.prueba}>
            <label htmlFor='summary'>Resumen de la receta</label>
            <input onChange={handleChange} type='textarea' name='summary' placeholder='summary...' />
          </div>

          <div className={styles.prueba}>
            <label htmlFor='spoonacularScore'>Puntaje para spoonacular</label>
            <input onChange={handleChange} type='number' name='spoonacularScore' placeholder='Score 0 -100...' />
          </div>

          <div className={styles.prueba}>
            <label htmlFor='healthScore'>Puntaje personal</label>
            <input onChange={handleChange} type='number' name='healthScore' placeholder='Score 0 -100...' />
          </div>
        </div>

        <div className={styles.divDosForm}>
          <h3 htmlFor='dietas'>Dietas de la receta</h3>
          <Diets />
        </div>

      </div>
      <div className={styles.generalityTwo}>
        <input type='submit' value='GENERAR' />
      </div>
    </form>
  )
}

export default Form