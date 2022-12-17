import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ username , children }) => {
    return username ? children : <Navigate to="/users/login" />;
  };

export default PrivateRoute;