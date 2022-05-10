import React from 'react';
import styles from './styles.module.css';

function Pages(props) {

    let posiblePages = [];
    for (let i = 1; i <= Math.ceil(props.allRecipes / props.elements); i++) {
        posiblePages.push(i)
    }
    
    return (
        <nav>
            <ul className={styles.root}>{
                posiblePages.map((e) => {
                    return (
                        <li
                            id={e}
                            className={props.paginaActual === e ? styles.active : styles.num} key={e}
                            onClick={() => {
                                 props.paginado(e)
                                 }}>
                            {e}
                        </li>
                    )
                })
            }</ul>
        </nav>
    )
}

export default Pages