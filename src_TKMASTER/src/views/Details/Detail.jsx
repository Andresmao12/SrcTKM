import { useParams } from "react-router-dom";

const Detail = () => {
  const { eventId } = useParams();
  console.log(eventId);

  return <div>Detalles del evento {eventId}</div>;
};

export default Detail;
