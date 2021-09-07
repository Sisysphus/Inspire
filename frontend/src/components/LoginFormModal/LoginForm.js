import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import { CgLogIn } from "react-icons/cg";
function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const onDemoLogin = () => {
    setCredential("demo@user.io");
    setPassword("password");
  };

  return (
    <>
      <h1 className="letslog">Log In</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="inputname">
          Username
          <input
            className="inputmodal"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="inputname">
          Password
          <input
            className="inputmodal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="thatone">
            Login
          </button>
        </label>
        <div className="demobuttonwrap">
          <button className="demobutton" type="submit" onClick={onDemoLogin}>
            Demo
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
