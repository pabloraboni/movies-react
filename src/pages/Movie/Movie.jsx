import styles from "./Movie.module.scss";

const Movie = () => {
  return (
    <>
      <div className="pr-page__content --f-center">
        <div className={styles["pr-page__home"]}>
          <h1>Filme</h1>
        </div>
      </div>
    </>
  );
};

export default Movie;
