import React from "react";

const Proyecto = ({ proyecto }) => {
  const { name, descripcion, url, imagen } = proyecto;

  return (
    <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-extrabold text-sky-700 mb-4 h-20 text-center">
          {name}
        </h3>
        <img
          src={imagen}
          alt="Imagen del proyecto"
          className="w-full h-40 mb-4"
        />
        <p className="text-gray-600 text-center text-xl font-bold mt-2 mb-4">
          {descripcion}
        </p>
      </div>
      <a
        className="bg-sky-500 mb-2 mt-4 text-center py-2 px-4 text-white uppercase font-extrabold rounded-lg "
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visitar sitio web
      </a>
    </div>
  );
};

export default Proyecto;
