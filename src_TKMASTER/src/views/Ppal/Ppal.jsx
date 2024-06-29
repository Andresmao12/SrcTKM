import Navbar from "../../components/Navbar/Navbar";
import EventsCont from "../../components/EventsCont/EventsCont";
import styles from './Ppal.module.css'

import { useState } from "react";

const Ppal = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (term) => {
    setSearchValue(term);
  };

  return (
    <div className={styles.AppCont}>
      <Navbar handleSearchValue={handleSearchValue} />
      <EventsCont searchValue={searchValue} />
      {/* <SignupForm></SignupForm> */}
    </div>
  );
};

export default Ppal;
