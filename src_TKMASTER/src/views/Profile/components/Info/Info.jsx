import styles from "./Info.module.css";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const userInfo = "userInfo";

const Info = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userUpdate, setUserUpdate] = useState(false);
  const [errorForm, setErrorForm] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem(userInfo)) || {};

    setValue("name", userData.name);
    setValue("age", userData.age);
    setValue("email", userData.email);
  }, [setValue]);

  const handleVlidations = () => {
    if (errors) {
      setErrorForm(errors);
      console.log(errors);
    }
  };

  const handleFormSubmit = (data) => {
    try {
      if (Object.keys(errors).length === 0) {
        window.localStorage.setItem(userInfo, JSON.stringify(data));
        console.log("Usuario actualizado: ", data);
        setUserUpdate(true);
        setErrorForm(null);

        setTimeout(() => {
          setUserUpdate(false);
        }, 5000);
      }
    } catch (error) {
      console.log("Error al actualizar usuario", error);
    }
  };

  const ErrorMessage = ({ message }) => {
    return <span className={styles.messageError}>{message}</span>;
  };

  const validation = (value) => {
    return (
      errorForm != undefined &&
      value in errorForm &&
      `errorForm.${value}` != undefined
    );
  };

  return (
    <section className={styles.infoContainer}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            onKeyUp={handleVlidations}
            type="text"
            {...register("name", {
              required: "Complete el campo",
              min: 1,
              max: { value: 100, message: "Demasiados caracteres" },
            })}
            className={styles.input}
            autoComplete="off"
          />
          {validation("name") ? (
            <ErrorMessage message={errorForm.name.message} />
          ) : null}
        </label>
        <label className={styles.label}>
          Email
          <input
            onKeyUp={handleVlidations}
            type="email"
            {...register("email", {
              required: "Complete el campo",
              min: 1,
              max: { value: 100, message: "Demasiados caracteres" },
            })}
            className={styles.input}
            autoComplete="off"
          />
          {validation("email") ? (
            <ErrorMessage message={errorForm.email.message} />
          ) : null}
        </label>
        <label className={styles.label}>
          Age
          <input
            onKeyUp={handleVlidations}
            type="number"
            {...register("age", {
              required: "Complete el campo",
              min: 1,
              max: { value: 120, message: "El limite es 120" },
              valueAsNumber: "Valor invalido",
            })}
            className={styles.input}
            autoComplete="off"
          />
          {validation("age") ? (
            <ErrorMessage message={errorForm.age.message} />
          ) : null}
        </label>

        <button
          type="submit"
          onClick={handleVlidations}
          className={styles.btnSave}
          style={errorForm?.age != null ? { marginTop: "15px" } : {}}
        >
          {userUpdate ? (
            <span className={styles.success}>Usuario actualizado</span>
          ) : null}
          Save
        </button>
      </form>
    </section>
  );
};

export default Info;
