import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function InitialPage() {
    return (
        <div className={styles.enter}>
            <div className={styles.divBottom} >
                <p className={styles.welcome} >Que la comida sea tu medicina y la medicina tu comida - Hipócrates -</p>
                <p className={styles.welcome} >Disfrúta al máximo nuestras recetas</p>
                <p className={styles.welcome} >Bienvenido</p>
                <Link className={styles.link} to='/home'><div className={styles.bottom}>GO TO HOME</div></Link>
            </div>
        </div>
    )
}

export default InitialPage