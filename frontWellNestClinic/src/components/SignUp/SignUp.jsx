import React, { useState } from "react";
import style from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/actions/actions";
import validation from "./Validation";

const SignUp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validation({ email, password });
    setError(errors);
    if (Object.keys(errors).length === 0) {
      try {
        //esto cambiarlo por props
        const id = "ec985fc2-66b0-4d4f-88b8-ec00a6c04463";
        const signUpResponse = await signUp(email, password, id);
        debugger;
        setEmail("");
        setPassword("");
        if (signUpResponse.status == 200) {
          navigate("/login");
        } else {
          let message = signUpResponse.data.message;
          if (!message) {
            message = signUpResponse.data.error;
          }
          const errorServer = { server: message };
          setError(errorServer);
        }
      } catch (error) {
        const errorServer = { server: "There is a server error" };
        setError(errorServer);
      }
    }
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
              <div className={style.label2}>
                (Use your membership email address to register)
              </div>
            </div>
            <input
              type="text"
              className={style.input}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error.email && <p className={style.error}>{error.email}</p>}
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
          {error.password && <p className={style.error}>{error.password}</p>}
          <button className={style.button} type="submit">
            Submit
          </button>
          {error.server && <p className={style.error}>{error.server}</p>}
          <h4>Or sign up with Google</h4>
          <h5>Already have an account? Sign in</h5>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
