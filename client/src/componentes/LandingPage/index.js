import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function InitialPage() {
    return (
        <div className={styles.divBottom} >
            <h1>¡¡¡WELCOME TO MY SUPER PAGE!!!</h1>
            <Link className={styles.link} to='/home'><div className={styles.bottom}>GO TO HOME</div></Link>
        </div>
    )
}

export default InitialPage