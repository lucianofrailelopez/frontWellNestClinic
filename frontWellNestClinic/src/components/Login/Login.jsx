import React, { useState } from "react";
import style from "./Login.module.css";
import { loginUser } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleDniChange = (e) => {
    setDni(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await dispatch(loginUser(email, password, dni));

      if (loginResponse.status==200) {
        navigate("/home");
      } else {

        setError(message);
      }
    } catch (error) {
      setError("Internal error");
    }
  };

  return (
    <div className={style.page}>
      <h1 className={style.heading}>Welcome</h1>
      <div className={style.container}>
        <h3>Sign in</h3>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <div>
              {" "}
              <label className={style.label}>Email address</label>
            </div>
            <input
              type="text"
              className={style.input}
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={style.form}>
            <div>
              {" "}
              <label className={style.label}>ID number</label>
            </div>
            <input
              type="text"
              className={style.input}
              placeholder="Enter ID"
              value={dni}
              onChange={handleDniChange}
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
          <button className={style.button} type="submit">
            Submit
          </button>
          {error && <p className={style.error}>{error}</p>}
          <h4>Or log in with Google</h4>
          <h5>Don't have an account? Sign up</h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
