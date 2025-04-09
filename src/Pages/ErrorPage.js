import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
      <button style={styles.button} onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "80px",
    color: "#dc3545",
    marginBottom: "10px",
  },
  message: {
    fontSize: "20px",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ErrorPage;
