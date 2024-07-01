import { useState, useEffect } from "react";
const apiKey = "bgqKyNi7dq2AuiuGLRXv0EDFbfITNauf";

const useEventsData = () => {
  const [dataFetch, setDataFetch] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(false);
  const [events, setEvents] = useState([]);
  const [pages, setPages] = useState(0);

  const getData = async (param) => {
    try {
      const res = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=MX${
          param?.length ? param : ""
        }`
      );
      const data = await res.json();
      console.log('data luego del fetch: ', data);
      setDataFetch(data);
    } catch (error) {
      console.log("Error in fetch: ", error);
      setErrorFetch(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dataFetch._embedded && dataFetch.page) {
      setEvents(dataFetch._embedded.events);
      setPages(dataFetch.page.totalPages);
      console.log('se ejecuto el useEfect en hook')
    }
  }, [dataFetch]);

  return {
    events,
    getData,
    loading,
    errorFetch,
    pages,
  };
};

export default useEventsData;
