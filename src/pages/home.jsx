import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styledComponents/Wrapper";
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  let navigate = useNavigate();
  const {user} = useAuth();

  if(user){
    return navigate('/changePassword', { replace: true })
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // height: "350px",
        justifyContent: "center",
      }}>
      <Wrapper>
        <h1
          style={{
            marginBottom: "80px",
            marginTop: "35px"
          }}
        >
          Home page
        </h1>
        <div>
          Hello, user please Log In or Sign In
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button onClick={() => navigate("/login")}>
            Log in
          </Button>
          <Button onClick={() => navigate("/signIn")}>
            Sign In
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};