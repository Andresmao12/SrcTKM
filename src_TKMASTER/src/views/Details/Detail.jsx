import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import styles from "./Detail.module.css";

const Detail = () => {
  const { eventId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [mouseEnter, setMouseEnter] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=bgqKyNi7dq2AuiuGLRXv0EDFbfITNauf`
        );
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  const handleBtnClose = () => {
    navigate("/");
  };

  const handleMouseEnter = ()=>{
    setMouseEnter(!mouseEnter)
  }

  const handleClickShop = ()=>{
    window.location.href = data.url;
  }

  if (error) {
    return <div className={styles.message}>Sory! An error in details</div>;
  }
  if (loading) {
    return <div className={styles.message}>Loading...</div>;
  }

  return (
    <article className={styles.container}>
      <section
        className={styles.banner}
        style={{ backgroundImage: `url(${data.images?.[0].url})` }}
      >
        <button onClick={handleBtnClose}>X</button>
        <h2>{data.name}</h2>
        <span>
          {format(new Date(data.dates.start.dateTime), "d MMMM yyyy h:mm b", {
            locale: es,
          })}
        </span>
      </section>

      <section className={styles.detailsCont}>
        <h3>Descripcion</h3>
        <p>{data.info}</p>

        <div className={styles.img_priceCont}>
          <img src={data.seatmap?.staticUrl} alt={data.name} />
          <div className={styles.priceDetails}>
            <div>
              <h4>PRECIOS: </h4>
              <p>
                {data.priceRanges[0].max}-{data.priceRanges[0].min}{" "}
                {data.priceRanges[0].currency}
              </p>
            </div>

            <div>
              <h4>Restriccionses: </h4>
              <p>{data.pleaseNote}</p>
            </div>

            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter} className={mouseEnter ? styles.mouseEnter : ''} onClick={handleClickShop}>Compra tus boletas</button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Detail;
