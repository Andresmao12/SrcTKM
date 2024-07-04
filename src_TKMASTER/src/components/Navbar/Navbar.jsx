import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleSearchValue }) => {

  const navigate = useNavigate();

  const handleSearch = (evt) => {
    if (evt.key === "Enter") {
      handleSearchValue(evt.target.value);
    }
  };

  const handleProfileBtn = ()=>{
    navigate('/profile/account')
  }

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
      <button onClick={handleProfileBtn} className={styles.btnProfile}>Profile</button>
    </div>
  );
};

export default Navbar;
