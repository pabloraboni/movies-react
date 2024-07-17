import ListMovies from '../../components/ListMovies'
import styles from './Home.module.scss'

const Home = () => {

    return (
        <>
            <div className="pr-page__content --f-center">
                <div className={styles["pr-page__home"]}>
                    <h1>Filmes da semana</h1>
                    <ListMovies/>
                </div>
            </div>
        </>
    )
}

export default Home