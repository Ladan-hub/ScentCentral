import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"
import { useHistory } from "react-router-dom";


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  const history = useHistory()
  const demo = () => {
   
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    )
      .then(() => history.push("/"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <main className="login-form-root">
      <div className="form-container-login">
    <form id="login-form" onSubmit={handleSubmit}>
    
    <div className="error-message-container">
      <ul>
        {errors.map((error, idx) => (
          <li className="error-message" key={idx}>{error}</li>
        ))}
      </ul>
      </div>
      <main className="login-fields-container">
      <div className="fields-label">
      <label>
        <input className="input"
        placeholder="Username or Email"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="fields-label">
      <label>
        
        <input className="input"
        placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </div>
      </main>
      <div className="signup-button-container" >
      <button className="login-button" type="submit">Log In</button>
      </div>
      <div className="demo-container">
      <button className="demo-button" onClick={() => demo()}>
        Demo
      </button>
      </div>
      
    </form>
    </div>
    </main>
  );
}

export default LoginForm;
