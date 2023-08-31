import React, { useState } from "react";
import style from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // poner la logica aca, mandar la data al back

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className={style.heading}>Welcome</h1>
      <div className={style.container}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <div>
              <label className={style.label}>Email address</label>
              <div  className={style.label2}>(must use your membership email address to register)</div>
            </div>
            <input
              type="email"
              className={style.input}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={style.label}>Password </label>
          </div>
          <input
            type="password"
            className={style.input}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className={style.button} type="submit">
            Submit
          </button>
          <h4>Or sign up with Google</h4>
          <h5>Already have an account? Sign in</h5>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
