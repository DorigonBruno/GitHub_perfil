import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import RepoList from "./components/RepoList";

function App() {
  const [exibeForm, setExibeForm] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <input
        type="text"
        onBlur={(event) => setNomeUsuario(event.target.value)}
      />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <RepoList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {exibeForm && <Formulario />} */}

      <button onClick={() => setExibeForm(!exibeForm)} type="button">
        toggle Form
      </button>
    </>
  );
}

export default App;
