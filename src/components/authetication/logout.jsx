import React from "react";

export const Logout = () => {
  localStorage.clear();
  window.location.href = "/";
  return (
    <div className="logout">
      <span></span>
    </div>
  );
};
