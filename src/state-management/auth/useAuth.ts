import { useContext } from "react";
import authContext from "../auth/authContext";

const useAuth = () => useContext(authContext);

export default useAuth;
