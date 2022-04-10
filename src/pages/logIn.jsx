import React, { useState } from "react";
import { InputsContainer, Title, Wrapper } from "./styles/style";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/actions/actionCreator";

export const LogIn =
  ({}) => {

    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleInputChange = (event) => {
      const id = event.target.id;
      const value = event.target.value

      if(id === "userName"){
        setUserName(value)
      }

      if(id === "password"){
        setPassword(value)
      }
    }

    const handleSubmit = () => {
      const data = {
        userName: userName,
        password: password,
      }
      dispatch(logIn(data))
    }


    return (
      <Wrapper>
        <Title>
          LogIn Page
        </Title>
        <InputsContainer>
          <TextField
            style={{
              marginTop: "15px",
              minHeight: "80px"
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
              minHeight: "80px"
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
              )
            }}
          />
          <Button
            onClick={(event) => handleSubmit(event)}
          >
            Log In
            {/*{isLoad ? (*/}
            {/*  <CircularProgress/>*/}
            {/*) : 'Log In'}*/}
          </Button>
        </InputsContainer>
      </Wrapper>
    );
  };