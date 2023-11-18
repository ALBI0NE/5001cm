import React from "react";
import { Navigate } from "react-router-dom";

const PermissionChecker = ({ element: Component, allowedRoles, ...rest }) => {
  const userRole = sessionStorage.getItem("role");

  console.log("User Role:", userRole);
  console.log("Allowed Roles:", allowedRoles);

  if (allowedRoles.includes(userRole)) {
    return <Component {...rest} />;
  } else {
    return <Navigate to='/unauthorized' replace />;
  }
};

export default PermissionChecker;
