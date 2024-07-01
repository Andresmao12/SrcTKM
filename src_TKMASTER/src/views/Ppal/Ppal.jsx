import Navbar from "../../components/Navbar/Navbar";
import EventsCont from "../../components/EventsCont/EventsCont";
import styles from "./Ppal.module.css";
import ReactPaginate from "react-paginate";

import { useState, useEffect } from "react";
import useEventsData from "../../Hooks/useEventData";

const Ppal = () => {
  const [searchValue, setSearchValue] = useState("");
  const { events, getData, loading, errorFetch, pages } = useEventsData();

  useEffect(() => {
    getData();
  }, []);

  const handleSearchValue = (term) => {
    setSearchValue(term);
  };

  // const handlePageClick = (selected) => {
  //   getData(`&keyword=${term}`);
  // };

  const EventsPages = () => {

    if (errorFetch) {
      return <div className={styles.message}>Not found</div>;
    }

    if (loading) {
      return <div className={styles.message}>Loading...</div>;
    }

    return (
      <div>
        <EventsCont searchValue={searchValue} events={events} />
        {/* <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        /> */}
      </div>
    );
  };

  return (
    <div className={styles.AppCont}>
      <Navbar handleSearchValue={handleSearchValue} />
      <EventsPages />
    </div>
  );
};

export default Ppal;
