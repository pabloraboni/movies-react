import styles from "./Search.module.scss";

//hooks
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

//components
import Loading from "../../components/Loading";
import ListMovies from '../../components/ListMovies'

//env
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [searchParams]);

  return (
    <div className="pr-page__content --f-center">
      <div className={styles["pr-page__search"]}>
        {movies.length === 0 && <Loading/>}
        {movies.length > 0 && <ListMovies title={`Resultados para ${query}`} topMovies={movies}/>}
      </div>
    </div>
  );
};

export default Search;
