/* Importaciones */
import { createContext, useState } from "react"

const initalState = {
  id: undefined,
  role: undefined,
  exp: undefined,
  jwt: undefined,
};

const Context = createContext({
  id: "",
  role: "",
  exp: "",
  jwt: "",
  setJwt: () => {},
  destroySession: () => {},
});

// Verifica el JWT que ya este puesto pero en el LOCAL STORAGE
// La función que me proporciona el JWT al momento del login es la función de loginpage.
const JwtProvider = ({ children }) => {
  const [jwt, setJwt] = useState(initalState);

  const destroySession = () => {
    localStorage.removeItem("token");
    setJwt(initalState);
  };

  return (
    <Context.Provider value={{ jwt, setJwt, destroySession }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
export { JwtProvider, Context as JwtContext };
