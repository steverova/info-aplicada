import "../public/css/style.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

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
            <div className="card ">
              <h5 id="card-header" className="card-header">
                Iniciar Sesion
              </h5>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="">Correo</label>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      style={{
                        border: errors.email ? "2px solid red" : "",
                      }}
                      placeholder={
                        errors.email
                          ? "Este campo es requerido*"
                          : "Ingrese su nombre"
                      }
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="">Contraseña</label>
                    <input
                      type="text"
                      {...register("password", { required: true })}
                      style={{
                        border: errors.password ? "2px solid red" : "",
                      }}
                      placeholder={
                        errors.password
                          ? "Este campo es requerido*"
                          : "Ingrese su nombre"
                      }
                    />
                  </div>
                  <button
                    className="btn btn-secondary d-flex justify-content-center align-content-between"
                    type="submit"
                  >
                    <i className="material-symbols-outlined mr-1">login</i>
                    Iniciar sesión
                  </button>
                  <Link to="/register">
                    <small className="">
                      <p className="mt-3">
                        ¿No tiene cuenta? <strong>Registrese</strong>
                      </p>
                    </small>
                  </Link>

                  <small>
                    <p>
                      Volver a <strong>Inicio</strong>
                    </p>
                  </small>
                </form>
                <p>{data}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
