import styles from "./ListMovies.module.scss";

//hooks
import { NavLink } from "react-router-dom";

const folderImages = import.meta.env.VITE_IMG;

const ListMovies = ({ title, topMovies }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={styles["pr-movies"]}>
        {topMovies &&
          topMovies.map((movie, i) => (
            <div key={i} className={styles["pr-movie"]}>
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
                  <div className="--wd-100 --frow-center --fgap-20">
                    <p className={styles["pr-movie__name"]}>
                      {movie.original_title}
                    </p>
                  </div>
                  <div className="--wd-100 --frow-center --fgap-20">
                    <p className={styles["pr-movie__stars"]}>
                      <span className="pr-icon-star"></span>{" "}
                      {movie.vote_average}
                    </p>
                    <p className={styles["pr-movie__date"]}>
                      <span className="pr-icon-calendar"></span>{" "}
                      {movie.release_date}
                    </p>
                    <NavLink to={`/movie/${movie.id}`} className="pr-icon-arrow-right3"></NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListMovies;
