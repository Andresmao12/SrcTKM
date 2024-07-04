import { create } from "zustand";

const useEventDataStore = create((set) => ({
  data: [],
  isLoading: true,
  errorFetch: null,
  getData: async (param) => {    
    
    try {
      const res = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
          import.meta.env.VITE_TICKETMASTER_API_KEY
        }&countryCode=MX${param?.length ? param : ""}`
      );
      const data = await res.json();
      set(() => ({ data }));

      console.log("Se ejecuto el fetch");
    } catch (error) {
      set(() => ({ error }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
  dataDetail: [],
  isLoadingDetail: true,
  errorFethcDetail: null,
  getDataDetail: async (eventId) => {
    //Se restablecen ya que se estaban mostrando los datos anteriores antes de los nuevos
    set(() => ({
      dataDetail: [],
      isLoadingDetail: true,
      errorFetchDetail: null,
    }));

    try {
      const res = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
          import.meta.env.VITE_TICKETMASTER_API_KEY
        }`
      );
      const data = await res.json();
      console.log("Se ejecuto el fetch de details");
      set(() => ({ dataDetail: data }));
    } catch (error) {
      set(() => ({ errorFethcDetail: error }));
    } finally {
      set(() => ({ isLoadingDetail: false }));
    }
  },
}));

export default useEventDataStore;
