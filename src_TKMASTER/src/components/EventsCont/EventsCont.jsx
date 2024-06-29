import styles from "./EventsCont.module.css";
import data from "../../data/events.json";
import EventItem from "./components/EventItem/EventItem";

function getData(searchValue) {
  const { events } = data._embedded;

  let eventsFilter = events;

  if (searchValue.length != 0) {
    eventsFilter = events.filter((event) => {
      return event.name.toUpperCase().includes(searchValue.toUpperCase());
    });
    console.log(eventsFilter);
  }

  const elementData = eventsFilter.map((element) => {
    const { name, info, images, id } = element;

    return (
      <EventItem
        key={id}
        id = {id}
        url={images[0].url}
        name={name}
        info={info}
      ></EventItem>
    );
  });

  return elementData;
}

const EventsCont = ({ searchValue }) => {
  return <div className={styles.eventsCont}>{getData(searchValue)}</div>;
};

export default EventsCont;
