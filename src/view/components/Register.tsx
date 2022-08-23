import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import userSchema from "../../validations/userFormValidations";
import Footer from "../../view/page/CustomFooter";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const [data, setData] = useState("");

  const onSubmit = (data: any) => {
    setData(JSON.stringify(data));
  };

  return (
    <React.Fragment>
      <div id="register-body">
        <div className="container pt-5 pb-5">
          <div className="col-md-10 col-lg-7 mx-auto">
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
                      <div className="col-sm-12 col-md-6 col-lg-6">
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
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
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
                    <small>
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <p>{message}</p>}
                      />
                    </small>
                  </div>

                  <div className="d-flex">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6">
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
                          <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p>{message}</p>}
                          />
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
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
                          <small>
                            <ErrorMessage
                              errors={errors}
                              name="password_confirm"
                              render={({ message }) => <p>{message}</p>}
                            />
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-cpurple btn-block d-flex justify-content-center align-content-between"
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
      <Footer></Footer>
    </React.Fragment>
  );
}

export default RegisterForm;
