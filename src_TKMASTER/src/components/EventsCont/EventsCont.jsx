import styles from "./EventsCont.module.css";
import EventItem from "./components/EventItem/EventItem";
import { memo } from "react";

function getData(data) {
  console.log(data);

  const elementData = data?.map((element) => {
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

const EventsCont = ({ events }) => {
  console.log("Se rendereo eventsCont");

  return <div className={styles.eventsCont}>{getData(events)}</div>;
};

export default memo(EventsCont);
