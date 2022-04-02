import { useContext } from "react";
import { AuthContext } from "../hoc/authProvider";

export const useAuth = () =>{
  return useContext(AuthContext)
}