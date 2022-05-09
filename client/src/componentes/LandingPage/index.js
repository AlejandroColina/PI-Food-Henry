import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function InitialPage() {
    return (
        <div className={styles.enter}>
            <div className={styles.divBottom} >
                <p className={styles.welcome} >Let food be your medicine and medicine your food - Hippocrates -</p>
                <p className={styles.welcome} >Enjoy our recipes to the fullest</p>
                <p className={styles.welcome} >WELCOME</p>
                <Link className={styles.link} to='/home'><div className={styles.bottom}>GO TO HOME</div></Link>
            </div>
        </div>
    )
}

export default InitialPage