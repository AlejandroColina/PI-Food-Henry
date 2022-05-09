import React, { useState } from 'react';
import styles from './styles.module.css';
import Diets from '../Diets';
import { useSelector, useDispatch } from 'react-redux';
import validate from '../herramientas/validate';
import { sentApost } from '../../../redux/action';
import { useHistory } from 'react-router-dom';

function Form() {
  let dispatch = useDispatch()
  let location = useHistory()
  const [input, setInput] = useState({
    title: '',
    steps: '',
    summary: '',
    spoonacularScore: 0,
    healthScore: 0,
    diets: []
  });

  const [errors, setError] = useState({
    title: '',
    steps: '',
    summary: '',
    spoonacularScore: '',
    healthScore: '',
    diets: ''
  });

  let fails = Object.keys(errors).length;

  const { types_diets_of_recite } = useSelector(state => state);
  input.diets = types_diets_of_recite

  const handleChange = (e) => {

    let { name, value } = e.target;

    setInput((prevState) => {
      let newState = {
        ...prevState,
        [name]: name === 'spoonacularScore' || name === 'healthScore'
          ? !isNaN(parseInt(value)) ? parseInt(value) : value = ''
          : value
      }
      setError(validate(newState));
      return newState;
    })

  }

  const onPressButton = (e) => {
    e.preventDefault()
    dispatch(sentApost(input))
    location.push('/home')
    setInput({
      title: '',
      steps: '',
      summary: '',
      spoonacularScore: 0,
      healthScore: 0,
      diets: []
    })
  }

  const onErrors = (e) => {
    e.preventDefault();
    alert('Debes solucionar los errores')
  }

  return (
    <form className={styles.formRecipe} onSubmit={fails ? onErrors : onPressButton}>
      <section className={styles.generalityOne}>
        <section className={styles.divUnoForm}>
          <div className={styles.prueba}>
            <label htmlFor='title'>A title for the recipe *</label>
            <input
              className={styles.inputForm}
              onChange={handleChange}
              type='text'
              value={input.title}
              name='title'
              placeholder='title...'
            />
            <p className={styles.soyerror} >{errors?.title}</p>
          </div>

          <div className={styles.prueba}>
            <label htmlFor='steps'>Steps</label>
            <input
              className={styles.inputForm}
              onChange={handleChange}
              type='textarea'
              value={input.steps}
              name='steps'
              placeholder='steps...'
            />
            <p className={styles.soyerror} >{errors?.steps}</p>
          </div>

          <div className={styles.prueba}>
            <label htmlFor='summary'>Summary to the recipe *</label>
            <input
              className={styles.inputForm}
              onChange={handleChange}
              type='textarea'
              value={input.summary}
              name='summary'
              placeholder='summary...'
            />
            <p className={styles.soyerror} >{errors?.summary}</p>
          </div>

          <div className={styles.prueba}>
            <label htmlFor='spoonacularScore'>Personal score</label>
            <input
              className={styles.inputForm}
              onChange={handleChange}
              type='number'
              value={input.spoonacularScore}
              name='spoonacularScore'
              placeholder='Score 0 - 100...'
            />
            <p className={styles.soyerror} >{errors?.spoonacularScore}</p>
          </div>

          <div className={styles.prueba}>
            <label htmlFor='healthScore'>Healthy score</label>
            <input
              className={styles.inputForm}
              onChange={handleChange}
              type='number'
              value={input.healthScore}
              name='healthScore'
              placeholder='Score 0 - 100...'
            />
            <p className={styles.soyerror} >{errors?.healthScore}</p>
          </div>
        </section>

        <div className={styles.divDosForm}>
          <h3 htmlFor='dietas'>Diets for the recipe</h3>
          <Diets />
        </div>

      </section>
      <div className={fails > 0 ? styles.nones : styles.generalityTwo}>
        <input
        className={styles.btnSubmit}
          type='submit'
          value='GENERAR'
        />
      </div>
    </form>
  )
}

export default Form