import React from 'react';
import Card from './../Home/Card/index';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function Favorites() {
    const { favorites } = useSelector(state => state);
    return (
        <main>
            <div className={styles.initial}>
                <section className={styles.sectionLink}>
                    <Link className={styles.link} to='/Home'>ALL RECIPES</Link>
                    <Link className={styles.link} to='/createrecipe'>CREATE RECIPE</Link>
                </section>
                <section className={styles.title}>
                    <div className={styles.henry}><h2>{`FAVORITES     FAVORITES     FAVORITES     FAVORITES`}</h2></div>
                </section>
            </div>
            <section className={styles.container}>{
                favorites.length?

                favorites.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <Card
                                key={recipe.id}
                                id={recipe.id}
                                image={recipe.image}
                                title={recipe.title}
                                diets={recipe.diets}
                                healthScore={recipe.healthScore}
                                spoonacularScore={recipe.spoonacularScore}
                                del={true}
                                add={false}
                            />
                        </div>
                    )
                })
                : <h1>😢😢 NO TIENES FAVORITOS 😢😢</h1>
            }</section>
        </main>
    )
}

export default Favorites