import { useState } from "react";
import styles from "./Header.module.scss";

//hooks
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {

  const [ query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(query){
      return navigate(`/search?q=${query}`);
    }
  }

  const [isFocusedSearch, setIsFocusedSearch] = useState(true);

  const handleFocus = () => {
    setIsFocusedSearch(false);
  };

  const handleBlur = () => {
    setIsFocusedSearch(true);
  };

  return (
    <header className={styles["pr-box__header"]}>
      <div className="pr-container">
        <div className={styles["pr-header__content"]}>
          <NavLink to="/" className={styles["pr-header__logo"]}>
            <span className="pr-icon-pablologo --font-14"></span>
          </NavLink>

          <nav className={styles["pr-box__menu"]}>
            <>
              <form className="pr-box__form" onSubmit={handleSearch}>
                <label className={`pr-box__input --icon --closed ${isFocusedSearch ? "" : "--collapse"}`}>
                  <span className="pr-icon-search"></span>
                  <input
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Pesquise algo"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  ></input>
                </label>
              </form>
            </>
            <NavLink to="/" className={styles["pr-menu__item"]}>
              <span className="pr-icon-home --font-15"></span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
