import React, { useState } from "react";
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material";
import { Wrapper } from "./styledComponents/Wrapper";
import { regExpEmail, regExpPassword } from "../common/regExps";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { SimpleModal } from "../components/modal";

export const LoginPage = () => {
  const [isLoad, setIsLoad] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true)

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [isModalOpen, setIsModalOpen] = useState(false)


  const navigate = useNavigate();

  const {user, signIn, isUserExist} = useAuth();

  if(user){
    return navigate('/changePassword', { replace: true })
  }

  const handleInputChange = (event) => {
    const target = event.target

    if(target.id === "email"){
      setEmail(target.value)
      setIsEmailCorrect(regExpEmail.test(target.value))
    }

    if(target.id === "password"){
      setPassword(target.value)
      setIsPasswordCorrect(regExpPassword.test(target.value))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isEmailCorrect || !isPasswordCorrect) return

    if (!email) {
      setIsEmailCorrect(false)
      return;
    }

    if (!password) {
      setIsPasswordCorrect(false)
      return;
    }

    const user = {
      email: email,
      password: password,
    }
    setIsLoad(true)
    const res = await isUserExist(user)
    if(res.answer)
      signIn(user, () => navigate("/changePassword", { replace: true }))
    setIsLoad(false)
    setIsModalOpen(true)
  }

  return(
    <div style={{
      display:"flex",
      flexDirection: "column",
      alignItems:"center",
      height: "350px",
      justifyContent: "center"
    }}>
      <Wrapper>
        <h1> Login page </h1>
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px"
          }}
          error={!isEmailCorrect}
          onChange={(event) => handleInputChange(event)}
          value={email}
          id="email"
          label="Email"
          variant="outlined"
          helperText={!isEmailCorrect ? "Enter correct email address" : ''}
        />
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px"
          }}
          value={password}
          error={!isPasswordCorrect}
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
          helperText={!isPasswordCorrect ? 'From 4 to 10 symbols. 1 UpperCase symbol.' : ''}
        />
        <Button
          style={{
            marginTop: "15px"
          }}
          onClick={(event) => handleSubmit(event)}
        >
          {isLoad ? (
            <CircularProgress/>
          ) : 'Log In'}
        </Button>
      </Wrapper>
      <SimpleModal
        isOpen={isModalOpen}
        header={'Wrong Data'}
        content={"Please check email and password"}
        close={() => setIsModalOpen(false)}
      />
    </div>
  )
}