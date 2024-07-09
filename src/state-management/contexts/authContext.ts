import { createContext, Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const authContext = createContext<AuthContextType>({} as AuthContextType);

export default authContext;
