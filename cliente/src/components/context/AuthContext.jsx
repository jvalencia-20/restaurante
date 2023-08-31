
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const MY_AUTH_TOKEN = 'MY_AUTH_TOKEN'; // Cambia el nombre a algo adecuado para tu aplicación

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState( window.localStorage.getItem("token") || null);

  const login = useCallback(function (newToken) {
    if (newToken) {
      console.log(newToken, "hice login con newtoken");
      window.localStorage.setItem("token", newToken);
      // window.sessionStorage.setItem(MY_AUTH_TOKEN, newToken);

      setToken(newToken);
    }
  }, []);

  const logout = useCallback(function () {
    console.log("hice logout")
    window.localStorage.removeItem( "token");  setToken(null);
    console.log(token, "aqui el token borrao")
  }, []);
  
  console.log(token, "este es el token actualizao")
  const value = useMemo(
    () => ({
      login,
      logout,
      token,
    }),
    [token, login, logout]
    
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}