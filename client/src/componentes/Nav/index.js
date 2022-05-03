import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './styles.module.css';
import Search from './Search/index';
import { order } from './../../redux/action';
import { useDispatch } from 'react-redux';

function Nav() {
  //usar HOOK para saber la ruta en la que estamos...
  // if que valide si estamos en /home mostrar los 4 LINK sino solo los dos primeros LINK
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  dispatch(order(selected));
  const handleChange1 = (e) => { setSelected(e.target.value) }

  return (
    <div className={style.navbar}>
      <div>
        <ul>
          <li> <Link className={style.link} to='/home'>ALL RECIPES</Link> </li>
          <li> <Link className={style.link} to='/create'>CREATE RECIPE</Link> </li>
        </ul>
      </div>
      <Search />
      <div>
        <select value={selected} onChange={handleChange1}>
          <option>ORDER BY SCORE</option>
          <option value='ALTOSPUNTAJES' >PUNTAJES ALTOS</option>
          <option value='BAJOSPUNTAJES' >PUNTAJES BAJOS</option>
          <option value='ALTASRECETAS'>ALTA CALIFICACION POR SPOON</option>
          <option value='BAJASRECETAS' >BAJA CALIFICACION POR SPOON</option>
        </select>
        <select value={selected} onChange={handleChange1} >
          <option>ORDER BY NAME</option>
          <option value='ASC'>A - Z</option>
          <option value='DESC' >Z - A</option>
        </select>
      </div>
    </div>
  )
}

export default Nav