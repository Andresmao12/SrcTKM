import styles from "./Navbar.module.css";

const Navbar = ({ handleSearchValue }) => {
  const handleSearch = (evt) => {
    if (evt.key === "Enter") {
      handleSearchValue(evt.target.value);
    }
  };

  return (
    <div className={styles.NavbarCont}>
      <span className={styles.navbarSpan}>Mi boletera</span>
      <div className={styles.inpCont}>
        <input
          type="text"
          id="inpSearch"
          placeholder=" "
          onKeyUp={handleSearch}
          className={styles.inpSearch}
        />
        <label htmlFor="inpSearch" className={styles.labelSearch}>
          Search
        </label>
      </div>
    </div>
  );
};

export default Navbar;
