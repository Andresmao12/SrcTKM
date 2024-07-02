import { useState } from "react";
const keyStorage = "likedItems";

const useEventLiked = (id) => {
  const [liked, setLiked] = useState(() => {
    const eventsLocal =
      JSON.parse(window.localStorage?.getItem(keyStorage)) || [];
    return eventsLocal?.includes(id);
  });

  const togleLike = (id) => {
    const eventsLocal =
      JSON.parse(window.localStorage?.getItem(keyStorage)) || [];
    const eventIndex = eventsLocal.indexOf(id);

    if (eventIndex === -1) {
      eventsLocal.push(id);
      setLiked(true);
    } else {
      eventsLocal.splice(eventIndex, 1);
      setLiked(false);
    }
    window.localStorage.setItem(keyStorage, JSON.stringify(eventsLocal));
  };

  return {
    liked,
    togleLike,
  };
};

export default useEventLiked;
