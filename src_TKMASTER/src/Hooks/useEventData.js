import { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;

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
      setDataFetch(data);
      console.log('Se ejecuto el fetch');
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
      console.log("Se actualizaron los datos en el hook");
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
