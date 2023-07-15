import React from "react";

const Proyectos = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-10">
      <h2 className="text-4xl font-bold mb-4 uppercase font-extrabold text-sky-600 text-center mt-10 mb-10">
        Proyectos destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            GuitarLa - tienda y blog de guitarras
          </h2>
          <img src="/img/GuitarLa.png" alt="GuitarLa" />
          <p className="text-gray-600 mb-4 mt-4 h-20">
            Es una tienda y blog online, creado con html, tailwind css, y Netx,
            utilizando Strapi como base de datos
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-8">
            <a
              target="_blank"
              href="https://guitar-la-netx-9hvzeetlf-nico-farias.vercel.app"
            >
              Ver más
            </a>
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Carrito de cursos online tipo Udemy
          </h2>
          <img src="/img/Carritodcursos.png" alt="carrito" />
          <p className="text-gray-600 mt-4 mb-4 h-20">
            Carrito de cursos online creada con tailwind y javascript.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-8">
            <a target="_blank" href="https://carritodecomprasccj.netlify.app/">
              Ver más
            </a>
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Cotizador de criptomonedas en tiempo real
          </h2>
          <img src="/img/cotizadorCrito.png" alt="criptos" />
          <p className="text-gray-600 mb-4 mt-4 h-20">
            Cotizador de criptomonedas creado con Tailwind CSS, React y
            utilizando una API externa para mostrar los precios en tiempo real.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-8">
            <a target="_blank" href="https://cotizar-cripto8290.netlify.app">
              Ver más
            </a>
          </button>
        </div>

        {/* Agrega más proyectos según sea necesario */}
      </div>
    </div>
  );
};

export default Proyectos;
