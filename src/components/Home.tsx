import { useUser } from "../contexts/UserContext";
import React from "react";

const Home = () => {
  const { data } = useUser();

  return <h1> Contenido del context: {JSON.stringify(data)}</h1>;
};

export default Home;
