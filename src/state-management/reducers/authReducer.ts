interface LoginUser {
  type: "LOGIN";
  user: string;
}

interface LogoutUser {
  type: "LOGOUT";
}

export type AuthAction = LoginUser | LogoutUser;

const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
  }
};

export default authReducer;
