/* Importaciones */
import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const initalState = {
  id: undefined,
  role: undefined,
  jwtTherapist: undefined,
};

const Context = createContext({
  id: "",
  role: "",
  jwtTherapist: "",
  setJwt: () => {},
  destroySession: () => {},
});

// Verifica el JWT que ya este puesto pero en el LOCAL STORAGE
// La función que me proporciona el JWT al momento del login es la función de loginpage.
const JwtTherapistProvider = ({ children }) => {
  const [jwtTherapist, setJwtTherapist] = useState(initalState);

  const firstRender = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setJwtTherapist({
        id: decodedToken.id,
        token: token,
        role: decodedToken.id,
      });
    }
  };

  const destroySession = () => {
    localStorage.removeItem("token");
    setJwtTherapist(initalState);
  };

  useEffect(() => {
    firstRender();
  }, []);

  return (
    <Context.Provider value={{ jwtTherapist, setJwtTherapist, destroySession }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
export { JwtTherapistProvider, Context as JwtContextTherapist };
