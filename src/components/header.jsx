import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";


const Header = ({}) => {
  let navigate = useNavigate();
  // let { user, signOut } = useAuth();
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/news")}>
            News
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile")}>
            Profile
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;