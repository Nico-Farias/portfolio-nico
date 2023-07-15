import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="flex flex-col ">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to={"/"}>
                <h1 className="text-white text-lg font-semibold flex items-center">
                  <img
                    src="/img/icons8-codificación-para-computadora-portátil-96.png"
                    alt="Logo"
                    className="w-8 h-8 mr-2"
                  />
                  Nico Farias Dev
                </h1>
              </Link>
            </div>
            <div className="flex">
              <Link
                to="/estudios"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Estudios
              </Link>
              <Link
                to="/proyectos"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Proyectos
              </Link>
              <Link
                to="/contacto"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Información
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navegacion;
