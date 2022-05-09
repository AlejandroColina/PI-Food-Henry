import { order } from './../../../redux/action';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function Select() {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(order(selected));
  }, [dispatch, selected]);

  const handleChange1 = (e) => { setSelected(e.target.value) }

  return (
    <div className={styles.allSelect}>

      <select value={selected} onChange={handleChange1}>
        <option>ORDER BY SCORE</option>
        <option value='ALTOSPUNTAJES' >HIGH HEALTHY SCORE</option>
        <option value='BAJOSPUNTAJES' >LOW HEALTHY SCORE</option>
        <option value='ALTASRECETAS'>HIGH SCORE BY PEOPLE</option>
        <option value='BAJASRECETAS' >LOW HEALTHY SCORE</option>
      </select>

      <select value={selected} onChange={handleChange1} >
        <option>ORDER BY NAME</option>
        <option value='ASC'>A - Z</option>
        <option value='DESC' >Z - A</option>
      </select>

      <select value={selected} onChange={handleChange1} >
        <option>FILTER BY DIET</option>
        <option value='GLUTEN_FREE'>GLUTEN FREE</option>
        <option value='DAIRY_FREE'>DAIRY FREE</option>
        <option value='LACTO_OVO_VEGETARIAN'>LACTO OVO VEGETARIAN</option>
        <option value='VEGAN'>VEGAN</option>
        <option value='PALEOLITHIC'>PALEOLITHIC</option>
        <option value='PRIMAL'>PRIMAL</option>
        <option value='PESCARIAN'>PESCATARIAN</option>
        <option value='FODMAP_FRIENDLY'>FODMAP FRIENDLY</option>
        <option value='WHOLE_30' >WHOLE 30</option>
      </select>

    </div>
  )
}

export default Select