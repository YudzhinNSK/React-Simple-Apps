import React, { useState } from "react";
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material";
import { Wrapper } from "./styledComponents/Wrapper";
import { regExpEmail, regExpPassword } from "../common/regExps";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SimpleModal } from "../components/modal";

export const SignInPage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isPasswordCorrect2, setIsPassword2Correct] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const { user, signIn, addNewUser } = useAuth();
  const navigate = useNavigate();
  if (user) {
    return navigate("/changePassword", { replace: true });
  }

  const handleInputChange = (event) => {
    const target = event.target;

    if (target.id === "email") {
      setEmail(target.value);
      setIsEmailCorrect(regExpEmail.test(target.value));
    }

    if (target.id === "password") {
      setPassword(target.value);
      setIsPasswordCorrect(regExpPassword.test(target.value));
    }

    if (target.id === "password2") {
      setPassword2(target.value);
      setIsPassword2Correct(target.value === password);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isEmailCorrect || !isPasswordCorrect || !isPasswordCorrect2) return;

    if (!email) {
      setIsEmailCorrect(false);
      return;
    }

    if (!password) {
      setIsPasswordCorrect(false);
      return;
    }

    if (!password2) {
      setIsPassword2Correct(false);
      return;
    }

    const user = {
      email: email,
      password: password,
    };
    setIsLoad(true)
    const result = await addNewUser(user);
    if (result.answer) {
       navigate("/login", { replace: true })
    }
    setIsEmailCorrect(false)
    setIsLoad(false)
    setIsModalOpen(true)
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "350px",
      justifyContent: "center",
      marginTop: "50px",
    }}>
      <Wrapper>
        <h1> SignIn page</h1>
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px",
          }}
          error={!isEmailCorrect}
          onChange={(event) => handleInputChange(event)}
          value={email}
          id="email"
          label="Email"
          variant="outlined"
          helperText={!isEmailCorrect ? "Enter correct email address" : ""}
        />
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px",
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
            ),
          }}
          helperText={!isPasswordCorrect ? "From 4 to 10 symbols. 1 UpperCase symbol." : ""}
        />
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px",
          }}
          value={password2}
          error={!isPasswordCorrect2}
          onChange={(event) => handleInputChange(event)}
          id="password2"
          label="Repeat Password"
          variant="outlined"
          type={"password"}
          helperText={!isPasswordCorrect2 ? "Must be same as previous field" : ""}
        />
        <Button
          style={{
            marginTop: "15px",
          }}
          onClick={(event) => handleSubmit(event)}
        >
          {isLoad ? (
            <CircularProgress />
          ) : "Sign In"}
        </Button>
      </Wrapper>
      <SimpleModal
        isOpen={isModalOpen}
        header={"Please check email"}
        content={"This Email is used by someone. "}
        close={() => setIsModalOpen(false)} />
    </div>
  );
};