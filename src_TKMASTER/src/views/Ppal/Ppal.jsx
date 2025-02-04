import Navbar from "../../components/Navbar/Navbar";
import EventsCont from "../../components/EventsCont/EventsCont";
import styles from "./Ppal.module.css";
import useStateEventsResult from "../../manageStatment/stateEventData";

import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const Ppal = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageActive, setPageActive] = useState(0);
  const { data, isLoading, errorFetch, getData } = useStateEventsResult();
  let events;
  if (events !== data) {
    events = data?._embedded?.events;
  }
  const pages = data?.page;
  const [dataFiltered, setDataFiltered] = useState(events);

  //PROBAMOS MEMOIZATION
  const [isTogleBtn, setIsTogleBtn] = useState(false);
  const handleTogle = () => {
    setIsTogleBtn(!isTogleBtn);
  };

  useEffect(() => {
    setDataFiltered(events);
    console.log(data);
  }, [events]);

  useEffect(() => {
    getData(`&page=${pageActive}&keyword=${searchValue}`);
    let eventsFilter = events;
    if (searchValue?.length != 0) {
      eventsFilter = events.filter((event) => {
        return event.name.toUpperCase().includes(searchValue.toUpperCase());
      });
    }
    setDataFiltered(eventsFilter);
  }, [pageActive]);

  useEffect(() => {
    getData(`&keyword=${searchValue}`);
    let eventsFilter = events;
    if (searchValue?.length != 0) {
      eventsFilter = events.filter((event) => {
        return event.name.toUpperCase().includes(searchValue.toUpperCase());
      });
    }
    setDataFiltered(eventsFilter);
  }, [searchValue]);

  const handleSearchValue = (term) => {
    setSearchValue(term);
    setPageActive(0);
  };

  const handlePageClick = ({ selected }) => {
    setPageActive(selected);
  };

  const EventsPages = () => {
    if (isLoading && !events) {
      return <div className={styles.message}>Loading...</div>;
    }

    if (errorFetch || !events) {
      return <div className={styles.message}>Not found</div>;
    }

    return (
      <div className={styles.evt_pagCont}>
        {/* <button onClick={handleTogle}>
        Try memo: {isTogleBtn ? "on" : "off"}
      </button> */}
        <EventsCont events={dataFiltered} />
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
          pageCount={pages.totalPages}
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
      <button onClick={handleTogle}>
        Try memo: {isTogleBtn ? "on" : "off"}
      </button>
      <EventsPages />
    </div>
  );
};

export default Ppal;
