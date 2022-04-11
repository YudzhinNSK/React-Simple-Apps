import React, { useEffect, useState } from "react";
import { InputsContainer, Title, Wrapper } from "./styles/style";
import { useDispatch, useSelector } from "react-redux";
import { switchReducer } from "../redux/reducers/logInLogOut";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { logOut } from "../redux/actions/actionCreator";

export const Profile =
  ({}) => {
    const navigate = useNavigate()
    const userData = useSelector(store => store?.switchReducer?.user || { } )
    const dispatch = useDispatch()

    const handleLogOut = () => {
      dispatch(logOut())
      navigate("/")
    }

    return (
      <Wrapper>
        <Title>
          Profile Page
        </Title>
        <InputsContainer>
          {`Hello ${userData.name} ${userData.surname}`}
          <Button onClick={() => handleLogOut()}>
            LogOut
          </Button>
        </InputsContainer>
      </Wrapper>
    );
  };