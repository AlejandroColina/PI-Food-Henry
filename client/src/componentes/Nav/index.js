import React from 'react'
import { Link } from 'react-router-dom';
import style from './styles.module.css';

function Nav() {
  return (
    <div className={style.navbar}>
      <ul>
        <li> <Link className={style.link} to='/home'>ALL RECIPES</Link> </li>
        <li> <Link className={style.link} to='/create'>CREATE RECIPE</Link> </li>
      </ul>
    </div>
  )
}

export default Nav