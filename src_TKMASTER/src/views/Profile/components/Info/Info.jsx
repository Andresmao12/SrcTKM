import styles from "./Info.module.css";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

const userInfo = "userInfo";

const Info = () => {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem(userInfo)) || {};

    setValue("name", userData?.name);
    setValue("age", userData?.age);
    setValue("email", userData?.email);
  }, []);

  const handleFormSubmit = (data) => {
    try {
      window.localStorage.setItem(userInfo, JSON.stringify(data));
      console.log("Usuario actualizado: ", data);
    } catch (error) {
      console.log("Error al actualizar usuario");
    }
  };

  return (
    <section className={styles.infoContainer}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            {...register("name", { required: true, min: 1, max: 120 })}
            className={styles.input}
            autoComplete="off"
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="email"
            {...register("email", { required: true, min: 1, max: 120 })}
            className={styles.input}
            autoComplete="off"
          />
        </label>
        <label className={styles.label}>
          Age
          <input
            type="number"
            {...register("age", {
              required: true,
              min: 1,
              max: 120,
              valueAsNumber: true,
            })}
            className={styles.input}
            autoComplete="off"
          />
        </label>

        <button className={styles.btnSave}>Save</button>
      </form>
    </section>
  );
};

export default Info;
