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
                        <li className={styles.num} key={e}>
                            <button onClick={() => {  props.paginado(e)}}>
                                {e}
                            </button>
                        </li>
                    )
                })
            }</ul>
        </nav>
    )
}

export default Pages