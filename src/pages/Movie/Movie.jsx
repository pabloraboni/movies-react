import styles from "./Movie.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;
const folderImages = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  const getMovieById = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovieById(movieUrl);
  }, []);

  return (
    <>
      <div className="pr-page__content --f-center">
        <div className={styles["pr-page__movie"]}>
          {movie && (
            <div className={styles["pr-movie"]}>
              <div className={styles["pr-movie__content"]}>
                <div
                  className={styles["pr-movie__thumb"]}
                  style={{
                    backgroundImage: `url(${folderImages}/${movie.backdrop_path})`,
                  }}
                >
                  <p>{movie.original_title}</p>
                </div>
                <div className={styles["pr-movie__descriptions"]}>
                  <p className={styles["pr-movie__name"]}>
                    {movie.original_title}
                  </p>
                  <p className={styles["pr-movie__summary"]}>
                    {movie.overview}
                  </p>
                  <div className="--wd-100 --frow-center --fgap-20">
                    <p className={styles["pr-movie__stars"]}>
                      <span className="pr-icon-star"></span>{" "}
                      {movie.vote_average}
                    </p>
                    <p className={styles["pr-movie__date"]}>
                      <span className="pr-icon-calendar"></span>{" "}
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
