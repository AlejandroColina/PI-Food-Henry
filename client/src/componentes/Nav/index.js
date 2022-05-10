import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Search from './Search/index';
import Select from './Select/index';


function Nav() {
  return (
    <div className={styles.navbar}>
      <div>
        <ul>
          <li> <Link className={styles.link} to='/createrecipe'>CREATE RECIPE</Link> </li>
          <li> <Link className={styles.link} to='/favorites'>FAVORITES</Link></li>
        </ul>
      </div>
      <Search />
      <Select />
    </div>

  )
}
export default Nav