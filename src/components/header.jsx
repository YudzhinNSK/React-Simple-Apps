import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SvgIcon } from "@mui/material";


const Header = ({}) => {
  let navigate = useNavigate();
  let { user, signOut } = useAuth();
  return (
    <>
      <AppBar position="static">
        <Toolbar >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              textAlign: "left"
            }}
          >
            Simple SPA React App
          </Typography>
          {user ? (
            <Button color="inherit" onClick={() => signOut(() => navigate("/"))}>
              Log Out
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/")}>
              HOME
            </Button>
          )
          }
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;