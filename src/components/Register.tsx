import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserForm } from "../interfaces/UserForm";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const [data, setData] = useState("");

  const onSubmit: SubmitHandler<UserForm> = (data) =>
    setData(JSON.stringify(data));

  // const onSubmit = handleSubmit((data) => {
  //     setData(JSON.stringify(data));
  //     console.log(JSON.stringify(data))
  // });

  return (
    <React.Fragment>
      <div id="register-body">
        <div className="container pt-5 pb-5">
          <div className="col-md-8 col-lg-8 mx-auto">
            <div className="card ">
              <div>
                <h1 className=" p-3 d-flex justify-content-center title-header">
                  Agregar Persona
                </h1>
              </div>
              <div className="card-body pl-5 pr-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="">Nombre</label>
                          <input
                            type="text"
                            {...register("name", { required: true })}
                            style={{
                              border: errors.name
                                ? "2px solid rgb(216, 52, 79)"
                                : "",
                            }}
                            placeholder={
                              errors.name
                                ? "Este campo es requerido*"
                                : "Ingrese su nombre"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group ml-3">
                          <label htmlFor="">Apellido</label>
                          <input
                            type="text"
                            {...register("lastname", { required: true })}
                            style={{
                              border: errors.lastname
                                ? "2px solid rgb(216, 52, 79)"
                                : "",
                            }}
                            placeholder={
                              errors.lastname
                                ? "Este campo es requerido*"
                                : "Ingrese su apellido"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

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
                          : "Correo: ejemplo@dominio.com"
                      }
                    />
                  </div>

                  <div className="d-flex">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="">Contraseña</label>
                          <input
                            type="text"
                            {...register("password", { required: true })}
                            style={{
                              border: errors.password
                                ? "2px solid rgb(216, 52, 79)"
                                : "",
                            }}
                            placeholder={
                              errors.lastname
                                ? "Este campo es requerido*"
                                : "Ingrese su contraseña"
                            }
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group ml-3">
                          <label htmlFor="">Contraseña*</label>
                          <input
                            type="text"
                            {...register("password_confirm", {
                              required: true,
                            })}
                            style={{
                              border: errors.password_confirm
                                ? "2px solid rgb(216, 52, 79)"
                                : "",
                            }}
                            placeholder={
                              errors.password_confirm
                                ? "Este campo es requerido*"
                                : "Ingrese su contraseña"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-secondary d-flex justify-content-center align-content-between"
                    type="submit"
                  >
                    <i className="material-symbols-sharp mr-1">save</i>
                    Guardar
                  </button>
                </form>
                <p>{data}</p>
              </div>
              <div className="panel-footer d-flex justify-content-center">
                <Link to="/login">
                  <h5 className="p-4">
                    Ya tiene cuenta? <span>Inicie sesion</span>
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer p-4">
        <div className="container">
          <p className="text-muted">Place sticky footer content here.</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default RegisterForm;
