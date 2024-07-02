import useEventLiked from "../../../../Hooks/useEventLiked";
import styles from "./EventItem.module.css";
import { useNavigate } from "react-router-dom";

const EventItem = ({ url, name, info, id }) => {
  const navigate = useNavigate();
  const { liked, togleLike } = useEventLiked(id);

  const handleBtnSeeMore = () => {
    navigate(`/detail/${id}`);
  };

  const handleLikeBtn = () => {
    togleLike(id);
  };

  return (
    <div className={styles.eventItem}>
      <div
        style={{ backgroundImage: `url(${url})` }}
        className={styles.eventItem_img}
      >
        {liked ? (
          <i
            className={`fa-solid fa-heart ${styles.solidHeart}`}
            onClick={handleLikeBtn}
          ></i>
        ) : (
          <i
            className={`fa-regular fa-heart ${styles.heart}`}
            onClick={handleLikeBtn}
          ></i>
        )}
      </div>
      {/* <img src={url} alt={name} className={styles.eventItem_img} /> */}
      <div className={styles.eventItem_info}>
        <h2 className={styles.info_title}>{name}</h2>
        <p className={styles.info_desc}>{info}</p>
        <button className={styles.eventItem_btn} onClick={handleBtnSeeMore}>
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;
