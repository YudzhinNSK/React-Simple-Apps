import React, { useState } from "react";
import { Wrapper } from "./styledComponents/Wrapper";
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { regExpPassword } from "../common/regExps";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { SimpleModal } from "../components/modal";

export const ChangePassword = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [isOldPasswordCorrect, setIsOldPasswordCorrect] = useState(true)
  const [isNewPasswordCorrect, setIsNewPasswordCorrect] = useState(true)
  const [isConfirmPasswordCorrect, setIsConfirmPasswordCorrect] = useState(true)


  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const {changeUserPassword} = useAuth()
  const navigate = useNavigate()

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const handleMouseDownOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleMouseDownNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isOldPasswordCorrect || !isNewPasswordCorrect || !isConfirmPasswordCorrect) return

    if (!oldPassword) {
      setIsOldPasswordCorrect(false)
      return;
    }

    if (!newPassword) {
      setIsNewPasswordCorrect(false)
      return;
    }

    if (!confirmPassword) {
      setIsConfirmPasswordCorrect(false)
      return;
    }

    setIsLoad(true)
    const result = await changeUserPassword(newPassword);

    if(result.answer) {
      navigate("/changePassword", { replace: true })
    }

    setIsOldPasswordCorrect(false)
    setIsLoad(false)
    setIsModalOpen(true)
  }

  const handleInputChange = (event) =>{
    const target = event.target

    if(target.id === "newPassword"){
      setNewPassword(target.value)
      setIsNewPasswordCorrect(regExpPassword.test(target.value))
    }

    if(target.id === "oldPassword"){
      setOldPassword(target.value)
      setIsOldPasswordCorrect(regExpPassword.test(target.value))
    }

    if(target.id === "confirmPassword"){
      setConfirmPassword(target.value)
      setIsConfirmPasswordCorrect(target.value === newPassword)
    }
  }


  return(
    <div style={{
      display:"flex",
      flexDirection: "column",
      alignItems:"center",
      justifyContent: "center"
    }}>
      <Wrapper>
        <h1> Change password page </h1>
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px"
          }}
          error={!isOldPasswordCorrect}
          onChange={(event) => handleInputChange(event)}
          value={oldPassword}
          id="oldPassword"
          label="Old Password"
          type={showOldPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowOldPassword}
                  onMouseDown={handleMouseDownOldPassword}
                >
                  {showOldPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          variant="outlined"
          helperText={!isOldPasswordCorrect ? "It's not your old password" : ''}
        />
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px"
          }}
          value={newPassword}
          error={!isNewPasswordCorrect}
          onChange={(event) => handleInputChange(event)}
          id="newPassword"
          label="New Password"
          variant="outlined"
          type={showNewPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownNewPassword}
                >
                  {showNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          helperText={!isNewPasswordCorrect ? 'From 4 to 10 symbols. 1 UpperCase symbol.' : ''}
        />
        <TextField
          style={{
            marginTop: "15px",
            minHeight: "80px"
          }}
          value={confirmPassword}
          error={!isConfirmPasswordCorrect}
          onChange={(event) => handleInputChange(event)}
          id="confirmPassword"
          label="Repeat Password"
          variant="outlined"
          type={"password"}
          helperText={!isConfirmPasswordCorrect ? 'Must be same as previous field' : ''}
        />
        <Button
          style={{
            marginTop: "15px"
          }}
          onClick={(event) => handleSubmit(event)}
        >
          {isLoad ? (
            <CircularProgress />
          ) : "Change Password"}
        </Button>
      </Wrapper>
      <SimpleModal
        isOpen={isModalOpen}
        header={"Please check old password"}
        content={"Entered data od old password is wrong, check it again."}
        close={() => setIsModalOpen(false)}
      />
    </div>
  )
}