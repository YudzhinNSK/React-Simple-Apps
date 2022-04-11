import React, { useEffect, useState } from "react";
import { InputsContainer, Title, Wrapper } from "./styles/style";
import { Alert, Button, CircularProgress, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export const LogIn =
  ({}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isUserLogged } = useSelector(store => store?.switchReducer || { isUserLogged: false });
    const { logInError } = useSelector( store => store?.errors || '')

    const { load } = useSelector(store => store?.loading || false)

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
      if (isUserLogged) navigate("/profile");
    }, [isUserLogged]);


    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleInputChange = (event) => {
      const id = event.target.id;
      const value = event.target.value;

      if (id === "userName") {
        setUserName(value);
      }

      if (id === "password") {
        setPassword(value);
      }
    };

    const handleSubmit = () => {
      const data = {
        userName: userName,
        password: password,
      };
      dispatch(logIn(data))
    };


    return (
      <Wrapper>
        <Title>
          LogIn Page
        </Title>
        <InputsContainer>
          <TextField
            style={{
              marginTop: "15px",
              minHeight: "80px",
            }}
            onChange={(event) => handleInputChange(event)}
            value={userName}
            id="userName"
            label="User Name"
            variant="outlined"
          />
          <TextField
            style={{
              marginTop: "15px",
              minHeight: "80px",
            }}
            value={password}
            onChange={(event) => handleInputChange(event)}
            id="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={(event) => handleSubmit(event)}
          >
            {load ? (
              <CircularProgress/>
            ) : 'Log In'}
          </Button>
        </InputsContainer>
        <Stack sx={{ width: '100%' }} spacing={2}>
          { !!logInError &&
            (
              <Alert severity="error">{logInError.toString()}</Alert>
            )
          }
        </Stack>
      </Wrapper>
    );
  };