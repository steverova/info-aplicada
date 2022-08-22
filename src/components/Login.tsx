import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginForm } from "../interfaces/LoginForm";
import Footer from "./page/CustomFooter";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const [data, setData] = useState("");

  const onSubmit: SubmitHandler<LoginForm> = (data) =>
    setData(JSON.stringify(data));

  return (
    <React.Fragment>
      <div id="register-body">
        <div className="container pt-5">
          <div className="col-md-8 col-lg-5 mx-auto">
            <div className="card">
              <div>
                <h1 className=" p-3 d-flex justify-content-center title-header">
                  Iniciar Sesi&oacute;n
                </h1>
              </div>
              <div className="card-body pl-5 pr-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="">Correo</label>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      style={{
                        border: errors.email
                          ? "2px solid rgb(216, 52, 79)"
                          : "",
                      }}
                      placeholder={
                        errors.email
                          ? "Este campo es requerido*"
                          : "Ingrese su correo"
                      }
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="">Contrase&ntilde;a</label>
                    <input
                      type="text"
                      {...register("password", { required: true })}
                      style={{
                        border: errors.password
                          ? "2px solid rgb(216, 52, 79)"
                          : "",
                      }}
                      placeholder={
                        errors.password
                          ? "Este campo es requerido*"
                          : "Ingrese su contraseña"
                      }
                    />
                  </div>
                  <button
                    className="btn btn-cpurple btn-block d-flex justify-content-center align-content-between"
                    type="submit"
                  >
                    <i className="material-symbols-outlined mr-1">login</i>
                    Iniciar sesi&oacute;n
                  </button>
                </form>
                <p>{data}</p>
              </div>
              <div className="panel-footer d-flex justify-content-center">
                <Link to="/register">
                  <h5 className="p-4">
                    No tiene cuenta? <span>Registrese</span>
                  </h5>
                </Link>
              </div>
            </div>
            <div className="mt-3">
              <Link to="/register">
                <h6 className="bottom-title">Volver al inicio</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      
    </React.Fragment>
  );
}

export default Register;
