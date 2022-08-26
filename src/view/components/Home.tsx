import React from "react";
import { useUser } from "../../contexts/UserContext";

const Home = () => {
  const { data } = useUser();
  

  const logindata = JSON.parse(localStorage.getItem("loginData") || "");
  console.log(logindata);

  return (
    <div className="container">
      <h4> Contenido del context:</h4>
      <p> {logindata.email}</p>
      <p> {logindata.password}</p>
    </div>
  );
};

export default Home;
