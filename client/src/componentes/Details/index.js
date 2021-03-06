import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { clearDetails, getDetail } from '../../redux/action';
import styles from './styles.module.css';
import photo from '../Home/media/photo.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(clearDetails());
    }
  }, [dispatch, id])
  const { details } = useSelector(state => state);

  return (
    <>
      <main className={styles.principal} >
        <section className={styles.subPrincipal}>
          <div className={styles.navbar}>
            <Link className={styles.link} to='/Home'>ALL RECIPES</Link>
            <Link className={styles.link} to='/createrecipe'>CREATE RECIPE</Link>
          </div>

          <div className={styles.container}>

            <h1>{details.title}</h1>
            <div className={styles.detailOne}>
              <img src={details.image || photo} alt={details.title} />
              <div className={styles.divDetailOne}>
                <div className={styles.divDetailOneP}>
                  <h4>Tipos de plato de la receta:</h4>
                  <p>{details.dishTypes}</p>
                </div>

                <div className={styles.divDetailOneP}>
                  <h4> Tipos de dieta de la receta:</h4>
                  <ul>{
                    details.diets?.map((diet) => {
                      return (
                        <li key={diet}>{diet}</li>
                      )
                    })
                  }</ul>
                </div>
              </div>

            </div>

            <div className={styles.detailTwo}>
              <hr />
              <h3><i>Summary</i></h3>
              <p dangerouslySetInnerHTML={{ __html: details.summary }} />
              <p><b>Personal Score: </b>{details.spoonacularScore}</p>
              <p><b>Healthy Score: </b>{details.healthScore}</p>
              <h3><i>Steps</i></h3>
              <p>{details.steps}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Details