
import React from "react";
import { useUser } from "../../contexts/UserContext";

const Home = () => {
  const { data } = useUser();

  return <h4> Contenido del context: {JSON.stringify(data)}</h4>;
};

export default Home;
