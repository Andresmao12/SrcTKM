import styles from "./EventsCont.module.css";
import EventItem from "./components/EventItem/EventItem";

function getData(searchValue, data) {
  let eventsFilter = data;


  if (searchValue.length != 0) {
    eventsFilter = data.filter((event) => {
      return event.name.toUpperCase().includes(searchValue.toUpperCase());
    });
  }
  console.log('filtered elements: ', eventsFilter)

  const elementData = eventsFilter.map((element) => {
    const { name, info, images, id } = element;

    return (
      <EventItem
        key={id}
        id={id}
        url={images[0].url}
        name={name}
        info={info}
      ></EventItem>
    );
  });
  return elementData;
}

const EventsCont = ({ searchValue, events }) => {
  return (
    <div className={styles.eventsCont}>{getData(searchValue, events)}</div>
  );
};

export default EventsCont;
