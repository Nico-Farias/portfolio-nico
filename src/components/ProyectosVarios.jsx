import useContextProyectos from "../hooks/useContextProyectos";
import Proyecto from "./Proyecto";

const ProyectosVarios = () => {
  const { obtenerProyectos } = useContextProyectos();

  return (
    <>
      <h2 className="text-4xl text-sky-500 m-10 text-center font-extrabold">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {obtenerProyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </>
  );
};

export default ProyectosVarios;
