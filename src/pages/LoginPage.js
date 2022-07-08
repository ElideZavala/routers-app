import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ? <== si el state es nulo arrojar undifinet sin intentar extraer el from
  const previusIbjectURL = location.state?.from;

  const auth = useAuth();

  const handleLogin = () => {
    auth.login();

    // ESTE OBJETO CONTIENE todo lo que contiene una url, en caso de no existir, se redirige a la otra ruta.
    navigate(previusIbjectURL || "/dashboard");
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={handleLogin}>Signin</button>
    </div>
  );
};

export default LoginPage;
