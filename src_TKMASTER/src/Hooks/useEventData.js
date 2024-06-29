import { useState } from "react";

const useEventsData = () => {
  const [events, setEvents] = useState([]);

  const getData = async (param) => {
    try {
      const res = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=bgqKyNi7dq2AuiuGLRXv0EDFbfITNauf&countryCode=MX${
          param?.length ? param : ''
        }`
      );
      const data = await res.json();
      setEvents(data._embedded.events);
    } catch (error) {
      console.log("Error in fetch: ", error);
    }
  };

  return {
    events,
    getData,
  };
};

export default useEventsData;
