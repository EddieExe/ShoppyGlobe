import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
      <p>Redirecting to login page.</p>
    </div>
  );
}

export default Logout;
