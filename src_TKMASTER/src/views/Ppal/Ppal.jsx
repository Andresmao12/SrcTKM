import Navbar from "../../components/Navbar/Navbar";
import EventsCont from "../../components/EventsCont/EventsCont";
import styles from "./Ppal.module.css";
import ReactPaginate from "react-paginate";

import { useState, useEffect } from "react";
import useEventsData from "../../Hooks/useEventData";

const Ppal = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageActive, setPageActive] = useState(0);
  const { events, getData, loading, errorFetch, pages } = useEventsData();

  useEffect(() => {
    getData(`&keyword=${searchValue}&page=${pageActive}`);
  }, [searchValue, pageActive]);

  const handleSearchValue = (term) => {
    setSearchValue(term);
    setPageActive(0)
  };

  const handlePageClick = ({ selected }) => {
    setPageActive(selected)
    console.log(selected);
  };

  const EventsPages = () => {
    if (errorFetch) {
      return <div className={styles.message}>Not found</div>;
    }

    if (loading) {
      return <div className={styles.message}>Loading...</div>;
    }

    return (
      <div className={styles.evt_pagCont}>
        <EventsCont searchValue={searchValue} events={events} />
        <ReactPaginate
        disabledClassName={styles.disabled}
          className={styles.pgContainer}
          pageClassName={styles.pgItem}
          nextClassName={styles.pgNext}
          previousClassName={styles.pgPrevious}
          breakClassName={styles.pgPoints}
          activeClassName={styles.pgActive}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pages}
          previousLabel="<"
          forcePage={pageActive}
          renderOnZeroPageCount={null}
        />
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
