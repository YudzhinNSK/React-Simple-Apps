import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "./styles/style";
import { useDispatch, useSelector } from "react-redux";
import { switchReducer } from "../redux/reducers/logInLogOut";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { logOut } from "../redux/actions/actionCreator";

export const Profile =
  ({}) => {
    const navigate = useNavigate()
    const [ isUserLogged, setIsUserLogged ]= useState(false)
    const [user, setUser] = useState(null)

    const storeData = useSelector(store => store?.switchReducer || { isUserLogged: false } )
    const userData = useSelector(store => store?.switchReducer?.user || { } )
    const dispatch = useDispatch()

    useEffect(() => {
      console.log(storeData)
      if(!storeData.isUserLogged) {
        console.log("false")
        navigate("/login");
        return
      }
      setUser(userData)
    },[])

    const handleLogOut = () => {
      dispatch(logOut())
      navigate("/")
    }

    return (
      <Wrapper>
        <Title>
          Profile Page
        </Title>
        <div>
          <Button onClick={() => handleLogOut()}>
            LogOut
          </Button>
        </div>
      </Wrapper>
    );
  };