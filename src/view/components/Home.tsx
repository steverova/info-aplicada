
import React from "react";
import { useUser } from "../../contexts/UserContext";
import "../../assets/css/home.css"

const Home = () => {
  const { data } = useUser();

  return (
    <div>
      <header>
        <h1 className="header-h1">the footer hack</h1>
        <nav>
          <ul>
            <a href="">
              <li>El Hack</li>
            </a>
            <a href="">
              <li>Qué es un Footer?</li>
            </a>
            <a href="">
              <li>FAQ sobre Footers</li>
            </a>
            <a href="">
              <li>Suscribirse a Developeando</li>
            </a>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h4> Contenido del context: {JSON.stringify(data)}</h4>
      </div>
      <footer>
        <p>Developeando 2021 | Footer Hack</p>
      </footer>
    </div>
  );
};

export default Home;
