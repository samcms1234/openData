import { createContext, useState } from "react";

const LoginContext = createContext({});


export const LoginProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState(null);

  return (
    <LoginContext.Provider value={{
      isLoggedIn, credentials
    }}>
        { children }
    </LoginContext.Provider>
  )
}

export default LoginContext 