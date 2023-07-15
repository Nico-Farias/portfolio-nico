import { useContext } from "react";
import Context from "../context/ContextProvider";

const useContextProyectos = () => {
  return useContext(Context);
};

export default useContextProyectos;
