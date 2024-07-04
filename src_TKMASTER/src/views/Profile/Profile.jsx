import styles from "./Profile.module.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleTogleActive = (path) => {
    navigate(path);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <article className={styles.container}>
      <div className={styles.nav}>
        <h3>Profile</h3>
        <button onClick={handleNavigateHome}>Inicio</button>
      </div>

      <div className={styles.detailsCont}>
        <div className={styles.pagesCont}>
          <span
            className={pathname.includes("account") ? styles.pageActive : ""}
            onClick={() => handleTogleActive("account")}
          >
            MI INFO
          </span>
          <span
            className={
              pathname.includes("liked-events") ? styles.pageActive : ""
            }
            onClick={() => handleTogleActive("liked-events")}
          >
            LIKED EVENTS
          </span>
        </div>
        <Outlet />
      </div>
    </article>
  );
};

export default Profile;
