import React from "react";
import Skills from "./Skills";
import Proyectos from "./proyectos";

const Inicio = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-5 bg-gray-10 ">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg  shadow-lg flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-1/3">
          <img
            src="img/ImgInicio-min.jpg"
            alt="Mi foto"
            className="object-cover w-full h-auto md:h-full"
          />
        </div>
        <div className="w-full md:w-2/3 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-sky-600">
            ¡Hola! Soy Nicolas,
          </h1>
          <p className="text-2xl ">
            Un apasionado desarrollador web frontend con un deseo insaciable de
            aprender y crecer. Estoy listo para sumergirme en el mundo del
            desarrollo y aprovechar cada oportunidad para mejorar mis
            habilidades. Mi objetivo es aportar creatividad, entusiasmo y un
            enfoque orientado a la calidad en cada proyecto en el que participe.
            Listo para unirme a un equipo innovador y contribuir al éxito de la
            empresa mientras continúo aprendiendo y desarrollándome en mi
            carrera. Juntos, podemos lograr grandes cosas y marcar la diferencia
            en el mundo digital.
          </p>
        </div>
      </div>
      <Skills />
      <Proyectos />
    </div>
  );
};

export default Inicio;
