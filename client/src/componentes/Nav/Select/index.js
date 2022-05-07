import { order } from './../../../redux/action';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'

function Select() {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  dispatch(order(selected));
  const handleChange1 = (e) => { setSelected(e.target.value) }

  return (
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
  )
}

export default Select