import React from 'react'
import { Link } from 'react-router-dom';
import style from './styles.module.css';
import Search from './Search/index';

function Nav() {
//usar HOOK para saber la ruta en la que estamos...
// if que valide si estamos en /home mostrar los 4 LINK sino solo los dos primeros LINK

  return (
    <div className={style.navbar}>
      <div>
        <ul>
          <li> <Link className={style.link} to='/home'>ALL RECIPES</Link> </li>
          <li> <Link className={style.link} to='/create'>CREATE RECIPE</Link> </li>
        </ul>
      </div>
      <Search/>
      <div>
        <ul>
          <li> <Link className={style.link} to='/'>RANKING BY SCORE</Link> </li>
          <li> <Link className={style.link} to='/'>ORDER BY NAME</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav