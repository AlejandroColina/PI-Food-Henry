import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, setDietsStore } from '../../../redux/action';
import styles from './styles.module.css';

function Diets() {
    const dispatch = useDispatch()
    let [checks, setChecks] = useState([]);

    useEffect(() => {
        dispatch(getDiets())
        dispatch(setDietsStore(checks))
    }, [dispatch, checks]);

    const { diets} = useSelector(state => state);
    
    const onChangeCheck = (e) => {
        setChecks(() => {
            let val = e.target.value
            if (checks.includes(parseInt(val))) {
                val = checks.filter(id => id !== parseInt(e.target.value));
            } else {
                val = [...checks, parseInt(e.target.value)]
            }
            return val
        })
    }
    return (
        <div className={styles.allCheckbox}>
            <ul>{
                diets.map((diet) => {
                    return (
                        <li key={diet.id}>
                            <div className={styles.divLi}>
                                <span>
                                    <input
                                        className={styles.check}
                                        type='checkbox'
                                        value={diet.id}
                                        name={diet.title}
                                        onChange={onChangeCheck}
                                    />
                                    {diet.title}
                                </span>
                            </div>
                        </li>
                    )
                })
            }</ul>
        </div>
    )
}

export default Diets