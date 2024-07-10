import { createContext, Dispatch } from "react";
import { AuthAction } from "./authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const authContext = createContext<AuthContextType>({} as AuthContextType);

export default authContext;
