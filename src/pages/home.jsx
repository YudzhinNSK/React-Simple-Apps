import React from "react";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1
        style={{
          marginBottom: "80px",
          marginTop: "35px",
        }}
      >
        Home page
      </h1>
      <div>
        Hello! Welcome to simple SPA React App!
      </div>
    </div>
  );
};