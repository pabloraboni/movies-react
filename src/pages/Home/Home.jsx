import { useState, useEffect} from 'react'
import styles from './Home.module.scss'

//components
import Loading from "../../components/Loading";
import ListMovies from '../../components/ListMovies'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);

    const getTopRateMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRateUrl = `${moviesURL}top_rated?${apiKey}`;
        getTopRateMovies(topRateUrl);
    }, [])

    return (
        <>
            <div className="pr-page__content --f-center">
                <div className={styles["pr-page__home"]}>
                    {topMovies.length === 0 && <Loading/>}
                    {topMovies.length > 0 && <ListMovies title="Mais bem avaliados" topMovies={topMovies}/>}
                </div>
            </div>
        </>
    )
}

export default Home