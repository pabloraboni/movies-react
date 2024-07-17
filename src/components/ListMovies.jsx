import styles from "./ListMovies.module.scss";

const ListMovies = () => {
  const repeatTimes = 5;

  return (
    <>
      <div className={styles["pr-movies"]}>
        {[...Array(repeatTimes)].map((_, index) => (
          <div key={index} className={styles["pr-movie"]}>
            <div className={styles["pr-movie__content"]}>
              <div className={styles["pr-movie__thumb"]}></div>
              <div className={styles["pr-movie__descriptions"]}>
                <p className={styles["pr-movie__name"]}>
                  A espera de um milagre
                </p>
                <p className={styles["pr-movie__tags"]}>
                  Drama <span></span> Comovente
                </p>
                <p className={styles["pr-movie__duration"]}>1h 34min</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListMovies;
