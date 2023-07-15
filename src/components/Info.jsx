import React from "react";

const Info = () => {
  return (
    <div className="h-1/2 bg-gray-100 p-10 ">
      <div className="max-w-lg  mx-auto bg-white p-12 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-600 mb-4 text-3xl">
          ¡No dudes en contactarme si tienes alguna pregunta o propuesta de
          colaboración!
        </p>
        <ul className="mb-4 ">
          <li className="flex items-center mb-2">
            <img
              className="w-50 h-50"
              src="/img/icons8-gmail-94.png"
              alt="gmail"
              srcset=""
            />
            <a
              href="mailto:nicoscs12@gmail.com"
              className="text-blue-500 hover:underline"
            >
              nicoscs12@gmail.com
            </a>
          </li>
          <li className="flex items-center mb-2">
            <img
              className="w-50 h-50"
              src="/img/icons8-github-96.png"
              alt="github"
            />
            <a
              href="https://github.com/Nico-Farias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/Nico-Farias
            </a>
          </li>
          <li className="flex items-center mb-2">
            <img
              className="w-50 h-50"
              src="/img/icons8-whatsapp-96.png"
              alt=""
              srcset=""
            />
            <a
              href="https://web.whatsapp.com/send?phone=+543464448290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              +543464448290
            </a>
          </li>
          <li className="flex items-center">
            <img
              className="w-50 h-50"
              src="/img/icons8-linkedin-96.png"
              alt="linkedin"
              srcset=""
            />
            <a
              href="https://www.linkedin.com/in/nico-farias-7655b8236/"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/nico-farias-7655b8236/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
