import { createContext } from "react";

const UserContext = createContext({
  userContext: null,
  setUserContext: () => {},
});

export default UserContext;
