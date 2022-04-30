import React from 'react';
import style from './styles.module.css';
import Card from './Card/Card';


function Home() {
  return (
    <div className={style.container}>
      <h1>Henry Food</h1>
      <div>Home</div>
      <Card />
    </div>
  )
}

export default Home