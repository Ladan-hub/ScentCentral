import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"


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

  return (
    <main className="form-root">
      <div className="form-container-login">
    <form onSubmit={handleSubmit}>
    <main className="fields-container">
    <div className="error-message-container">
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      </div>
      <div className="label">
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
      <div className="label">
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
      <div className="signup-button-container" >
      <button className="login-button" type="submit">Log In</button>
      </div>
      </main>
    </form>
    </div>
    </main>
  );
}

export default LoginForm;
