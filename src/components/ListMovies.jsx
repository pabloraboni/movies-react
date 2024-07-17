import styles from "./ListMovies.module.scss";

const folderImages = import.meta.env.VITE_IMG

const ListMovies = ({title, topMovies}) => {

  return (
    <>
      <h1>{title}</h1>
      <div className={styles["pr-movies"]}>
        {
          topMovies && topMovies.map((movie, i) => (
            <div key={i} className={styles["pr-movie"]}>
              <div className={styles["pr-movie__content"]}>
                <div className={styles["pr-movie__thumb"]} style={{ backgroundImage: `url(${folderImages}/${movie.poster_path})`}}></div>
                <div className={styles["pr-movie__descriptions"]}>
                  <p className={styles["pr-movie__name"]}>
                    {movie.original_title}
                  </p>
                  <p className={styles["pr-movie__tags"]}>
                    Drama <span></span> Comovente
                  </p>
                  <p className={styles["pr-movie__duration"]}>1h 34min</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default ListMovies;
