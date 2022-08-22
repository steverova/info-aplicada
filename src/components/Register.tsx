import "../public/css/style.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type UserForm = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  password_confirm: string;
};

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
              <h5 id="card-header" className="card-header">
                Agregar Persona
              </h5>
              <div className="card-body">
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
                              border: errors.name ? "2px solid red" : "",
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
                          <label htmlFor="">Apelllido</label>
                          <input
                            type="text"
                            {...register("lastname", { required: true })}
                            style={{
                              border: errors.lastname ? "2px solid red" : "",
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
                        border: errors.email ? "2px solid red" : "",
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
                              border: errors.password ? "2px solid red" : "",
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
                                ? "2px solid red"
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
                  <a href={"/Login"}>
                    <small>
                      <p className="mt-3">
                        ¿Ya tiene una cuenta? <strong>Inicie sesion</strong>
                      </p>
                    </small>
                  </a>
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

export default RegisterForm;
