import React, { useState } from "react";
import "./styles/Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "123") {
      onLogin();
    } else {
      setError("Wrong username or password 💔");
    }
  };

  return (
    <div className="login-container">
      <img
        className="log-in-img"
        src={`${process.env.PUBLIC_URL}/bubu-dudu.gif`}
        alt="bubu and dudu"
      />
      <h2>Welcome, My Love ❤️</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit"> Log In</button>
      </form>
    </div>
  );
}
