import { createContext, useEffect, useState } from "react";
import proyectos from "../proyectos/proyectos.json";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [obtenerProyectos, setObtenerProyectos] = useState([]);

  useEffect(() => {
    setObtenerProyectos(proyectos);
  }, []);

  console.log(obtenerProyectos);

  return (
    <Context.Provider value={{ obtenerProyectos }}>{children}</Context.Provider>
  );
};

export { ContextProvider };

export default Context;
