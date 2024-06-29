import "./SignupForm.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  const handleClear = () => {
    reset();
  };

  return (
    <form className="formSing" onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="">
        Name
        <input type="text" {...register("name", { required: true })} />
      </label>
      <label htmlFor="">
        Phone
        <input type="text" {...register("phone", { required: true })} />
      </label>
      <label htmlFor="">
        Age
        <input type="text" {...register("age", { required: true })} />
      </label>
      <label htmlFor="">
        Password
        <input type="text" {...register("psw", { required: true })} />
      </label>
      <div>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default SignupForm;
