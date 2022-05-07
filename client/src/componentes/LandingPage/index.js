import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function InitialPage() {
    return (
        <div className={styles.enter}>
            <div className={styles.divBottom} >
                <h1 className={styles.welcome} >¡¡¡WELCOME TO MY SUPER PAGE!!!</h1>
                <Link className={styles.link} to='/home'><div className={styles.bottom}>GO TO HOME</div></Link>
            </div>
        </div>
    )
}

export default InitialPage