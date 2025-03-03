// Success.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Success.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h2>Order Placed Successfully! 🎉</h2>
      <p>Thank you for shopping with us.</p>
      <button className="back-home" onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
};

export default Success;