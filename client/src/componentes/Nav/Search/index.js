import styles from './styles.module.css';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../../redux/action';

function Search() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getRecipes(name))
        setName('')
    }

    return (
        <div className={styles.div}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputSearch} >
                    <input
                        value={name}
                        className={styles.inputSearchT}
                        type='text'
                        onChange={handleChange}
                        placeholder='   Search a recipe...'
                    />   🔎
                </div>
                <input className={styles.submit} type='submit' value='SEARCH'/>
            </form>
        </div>
    )
}

export default Search