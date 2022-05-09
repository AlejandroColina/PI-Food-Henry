import React from 'react'
import { Link } from 'react-router-dom';
import style from './styles.module.css';
import Search from './Search/index';
import Select from './Select/index';


function Nav() {
  return (
    <div className={style.navbar}>
      <div>
        <ul>
          <li> <Link className={style.link} to='/create'>CREATE RECIPE</Link> </li>
        </ul>
      </div>
      <Search />
      <Select />
    </div>

  )
}
export default Nav