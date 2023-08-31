import React, { useState } from "react";
import style from './Login.module.css'
import { loginUser } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";



const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password))
  };
  return (
      <div>
        <h1 className={style.heading}>Welcome</h1>
    <div className={style.container}>
      <h3>Sign in</h3>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <div>
            {" "}
            <label className={style.label}>Email address/ID number</label>
          </div>
          <input
            type="text"
            className={style.input}
            placeholder="Enter email or ID"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          {" "}
          <div>
            <label className={style.label}>Password </label>
          </div>
          <input
            type="password"
            className={style.input}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>{" "}
        <button className={style.button}type="submit">Submit</button>
        <h4>Or log in with Google</h4>
        <h5>Don't have an account? Sign up</h5>
      </form>
    </div>
    </div>
  );
};

export default Login;
