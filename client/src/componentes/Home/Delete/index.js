import React from 'react';
import { deleteCard } from './../../../redux/action';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';

function Delete({ id }) {
  const dispatch = useDispatch();
  return (
    <button className={styles.deleteBtn} onClick={() => dispatch(deleteCard(id))} >😠</button>
  )
}

export default Delete