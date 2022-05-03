import styles from './styles.module.css';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../../redux/action';

function Search() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes(name))

    }, [dispatch, name]);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.div}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputSearch} >
                    <input type='text' onChange={handleChange} placeholder='   Search a recipe...' />   🔎
                </div>
                {/* <input type='submit' value='SEARCH' className={styles.submit} /> */}
            </form>
        </div>
    )
}

export default Search