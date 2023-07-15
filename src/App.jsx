import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./components/Inicio";
import Info from "./components/Info";
import Estudios from "./components/Estudios";
import { ContextProvider } from "./context/ContextProvider";
import ProyectosVarios from "./components/ProyectosVarios";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="/estudios" element={<Estudios />} />
              <Route path="/proyectos" element={<ProyectosVarios />} />
              <Route path="/contacto" element={<Info />} />
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
