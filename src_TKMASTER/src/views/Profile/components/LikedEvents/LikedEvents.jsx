import styles from "./LikedEvents.module.css";
import EventItem from "../../../../components/EventsCont/components/EventItem/EventItem";
import EventsCont from "../../../../components/EventsCont/EventsCont";
import useEventDataStore from "../../../../manageStatment/stateEventData";
import { useEffect, useState } from "react";

const LikedEvents = () => {
  const { data, isLoading, errorFetch, getData } = useEventDataStore();
  const events = data?._embedded?.events;
  console.log(events);

  const [datafiltered, setDataFiltered] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (events) {
      const likeds = window.localStorage.getItem("likedItems") || [];

      const filtered = events.filter((evt) => {
        return likeds.includes(evt.id);
      });
      setDataFiltered(filtered);
    }
  }, [events]);

  if (isLoading && !datafiltered) {
    return (
      <div className={styles.likedCont}>
        <div className={styles.message}>Loading...</div>
      </div>
    );
  }

  if (errorFetch || !datafiltered || datafiltered.length == 0) {
    return (
      <div className={styles.likedCont}>
        <div className={styles.message}>Not found</div>
      </div>
    );
  }

  return (
    <div className={styles.likedCont}>
      <EventsCont events={datafiltered} />
    </div>
  );
};

export default LikedEvents;
