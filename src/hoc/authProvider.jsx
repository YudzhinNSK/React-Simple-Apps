import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [usersList, setUsersList] = useState([])

  const signIn = (user, callBack) =>{
    setUser(user);
    callBack();
  }

  const signOut = (callBack) => {
    setUser(null);
    callBack();
  }

  const addNewUser = (user) => new Promise((resolve) => {
    const usersList = localStorage.getItem("usersList")
    if(usersList){
      const users = JSON.parse(usersList)
      if(users.find((usr) => usr.email === user.email)){
        setTimeout(() => resolve( {answer: false} ), 5000)
      }
      users.push(user)
      setUsersList(users)
      localStorage.setItem("usersList", JSON.stringify(users))
      setTimeout(() => resolve( {answer: true} ), 5000)
    }
    setUsersList([user]);
    localStorage.setItem("usersList", JSON.stringify([user]))
    setTimeout(() => resolve( {answer: true} ), 5000)
  })

  const isUserExist = (user) => new Promise ((resolve) => {
    const usersList = localStorage.getItem("usersList")
    if(usersList){
      const users = JSON.parse(usersList)
      if(users.find((usr) => usr.email === user.email)){
        setTimeout(() => resolve( {answer: true} ), 5000)
      }
    }
    setTimeout(() => resolve( {answer: false} ), 5000)
  })

  const changeUserPassword = (oldPassword, newPassword) => new Promise ((resolve) => {
    console.log(user.password, oldPassword)
    if(user.password !== oldPassword){
      setTimeout(() => resolve( {answer: false} ), 5000)
    }
    const usersList = localStorage.getItem("usersList")
    const newUser = {
      email: user.email,
      password: newPassword
    }
    if(usersList){
      const users = JSON.parse(usersList)
      const newUserList = users.filter((usr) => usr.email !== user.email)
      newUserList.push(newUser)
      setUsersList(newUserList)
      setUser(newUser)
      localStorage.setItem("usersList", JSON.stringify(newUserList))
      setTimeout(() => resolve( {answer: true} ), 5000)
    }
    localStorage.setItem("usersList", JSON.stringify([newUser]))
    setTimeout(() => resolve( {answer: true} ), 5000)
  })

  const data = {user, signIn, signOut, addNewUser, usersList, isUserExist, changeUserPassword}

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};