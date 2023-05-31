import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <main className="login-form-root">
      <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
      
      <div className="error-message-container">
      <ul>
        {errors.map((error, idx) => <li className="error-message" key={idx}>{error}</li>)}
      </ul>
      </div>
      <main className="login-fields-container">
      <div className="fields-label">
      <label>
        <input className="input"
        placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="fields-label">
      <label>
        <input className="input"
        placeholder="User Name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div className="fields-label">
      <label>
        
        <input className="input"
        placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="signup-button-container">
      <button className="signup-button" type="submit">Sign Up</button>
      </div>
      </main>
    </form>
    </div>
    </main>
  );
}

export default SignupFormPage;
