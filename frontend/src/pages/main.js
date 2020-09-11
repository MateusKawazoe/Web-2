import React, { useState } from "react";
import axios from "axios";

import "../styles/main.css";

export default function Main({ history }) {
  const [gatinhos, setGatinhos] = useState("");

  async function buscar() {
    setGatinhos(
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"
    );
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    setGatinhos(response.data[0].url);
  }

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("lastName");
    localStorage.removeItem("id");
    history.push('/')
  }

  return (
    <div className="container">
      <img className="imagem" src={gatinhos} />
      <button className="botao" onClick={buscar}>
        Click Aqui
      </button>
      <button className="botao" onClick={sair}>
        Sair
      </button>
    </div>
  );
}
