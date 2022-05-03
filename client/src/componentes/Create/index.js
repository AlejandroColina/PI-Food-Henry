import React, { useState } from 'react';
import styles from './styles.module.css';

function Create() {
const [input, setInput] = useState({
  title:'',
  steps:'',
  summary:'',
  spoonacularScore: 0,
  healthScore: 0,
  diets:[]
});

console.log(input.healthScore)

const onPressButton = (e)=>{
  e.preventDefault()
}

const handleChange = (e)=>{
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
}

  return (
    <div className={styles.container}>
      <h1>CREATE A NEW RECIPE</h1>
      <form onSubmit={onPressButton}>
        <label htmlFor='title'>Ingresa un nombre para la receta</label>
        <input onChange={handleChange}  type='text' name='title' placeholder='title...' />

        <label htmlFor='steps'>Pasoa paso</label>
        <input onChange={handleChange} type='textarea' name='steps' placeholder='steps...' />

        <label  htmlFor='summary'>Resumen de la receta</label>
        <input onChange={handleChange} type='textarea' name='summary' placeholder='summary...' />

        <label htmlFor='spoonacularScore'>Puntaje para spoonacular</label>
        <input onChange={handleChange} type='number' name='spoonacularScore' placeholder='Score 0 -100...' />

        <label htmlFor='healthScore'>Puntaje personal</label>
        <input onChange={handleChange} type='number' name='healthScore' placeholder='Score 0 -100...' />

        <label htmlFor='dietas'>Dietas</label>
        <input onChange={handleChange} type='text' name='dietas' placeholder='dietas...' />

        <input type='button' value='GENERAR' onClick={'fetchPost'}/>
      </form>
    </div>
  )
}

export default Create