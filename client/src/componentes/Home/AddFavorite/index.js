import React from 'react'
import styles from './styles.module.css';
import { addFavorite } from '../../../redux/action';
import { useDispatch } from 'react-redux';

function Favorite({ id }) {
    const dispatch = useDispatch();
    return (
        <button className={styles.favoriteBtn} onClick={() => dispatch(addFavorite(id))}>💓</button>
    )
}

export default Favorite