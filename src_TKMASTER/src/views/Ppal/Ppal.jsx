import Navbar from "../../components/Navbar/Navbar";
import EventsCont from "../../components/EventsCont/EventsCont";
import styles from "./Ppal.module.css";

import { useState, useEffect } from "react";
import useEventsData from "../../Hooks/useEventData";

const Ppal = () => {
  const [searchValue, setSearchValue] = useState("");
  const { events, getData, loading } = useEventsData();

  useEffect(() => {
    getData();
  }, []);

  const handleSearchValue = (term) => {
    setSearchValue(term);
    getData(`&keyword=${term}`);
  };

  return (
    <div className={styles.AppCont}>
      <Navbar handleSearchValue={handleSearchValue} />
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <EventsCont searchValue={searchValue} events={events} />
      )}
    </div>
  );
};

export default Ppal;
