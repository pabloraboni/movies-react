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

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
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
                  <div className="--wd-100 --frow-centerbetween --row-wrap --fgap-20">
                    <p className={styles["pr-movie__name"]}>
                      {movie.original_title}
                    </p>
                    <p className={styles["pr-movie__stats"]}>
                      <span className="pr-icon-clock-2"></span> {movie.runtime}{" "}
                      min.
                    </p>
                  </div>
                  <p className={styles["pr-movie__summary"]}>
                    {movie.overview}
                  </p>
                  <div className="--wd-100 --frow-center --row-wrap --fgap-20">
                    <p className={styles["pr-movie__stats"]}>
                      <span className="pr-icon-calendar"></span>{" "}
                      {movie.release_date}
                    </p>
                    <p className={styles["pr-movie__stats"]}>
                      <span className="pr-icon-star"></span>{" "}
                      {movie.vote_average}
                    </p>
                  </div>
                  <div className="pr-line"></div>
                  <div className="--wd-100 --frow-center --row-wrap --fgap-20">
                    <p className={styles["pr-movie__stats"]}>
                      <span className="pr-icon-relatorio"></span> Orçamento:{" "}
                      {formatCurrency(movie.budget)}
                    </p>
                    <p className={styles["pr-movie__stats"]}>
                      <span className="pr-icon-seo"></span> Receita:{" "}
                      {formatCurrency(movie.revenue)}
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
