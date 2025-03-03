// NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button className="back-home" onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default NotFound;