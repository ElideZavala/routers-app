import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    // Traemos el usuario guardado en el LocalStorage en caso de que no ahiga sera null.
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Lo llamaremos cada que user sea modificado.
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      // En caso de existir un error se eliminara para no crear conficto en caso de tratarlo de ontener la proxima vez.
      localStorage.removeItem("user", JSON.stringify(user));
      console.log(error);
    }
  }, [user]);

  // Los valores que le vamos a pasar a los children
  const contextValue = {
    user,
    login() {
      // Actualizamos nuestro usuario.
      setUser({ id: 1, username: "Elide" });
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      // Comprobamos si el usuario esta logueado.
      // Si el usuario es nulo con la doble negacion al final nos retorna false, pero si el usuario no es nulo, nos retorna true.
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
