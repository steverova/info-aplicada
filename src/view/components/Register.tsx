import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import userSchema from "../../validations/userFormValidations";
import Footer from "../../view/page/CustomFooter";
import Header from "../../view/page/CustomHeader";

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

  const error = (data:string ) => (
    <small>
      <ErrorMessage
        errors={errors}
        name={data}
        render={({ message }) => <p>{message}</p>}
      />
    </small>
  );

  const input = (input: string, error: any, errorMessage: string) => (
    <input
      type="text"
      {...register(input, { required: true })}
      style={{
        border: error ? "2px solid rgb(216, 52, 79)" : "",
      }}
      placeholder={error ? "Este campo es requerido*" : errorMessage}
    />
  );

  return (
    <React.Fragment>
      <div id="register-body">
        <Header></Header>
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
                          {input("name", errors.name, "Ingrese su Nombre")}
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label htmlFor="">Apellido</label>
                          {input(
                            "lastname",
                            errors.lastname,
                            "Ingrese su Apellido"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Correo</label>
                    {input(
                      "email",
                      errors.email,
                      "Correo: ejemplo@dominio.com"
                    )}
                    {error("email")}
                  </div>

                  <div className="d-flex">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label htmlFor="">Contraseña</label>
                          {input(
                            "password",
                            errors.password,
                            "Ingrese su contraseña"
                          )}
                          {error("password")}
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label htmlFor="">Contraseña*</label>
                          {input(
                            "password_confirm",
                            errors.password_confirm,
                            "Confirme su contraseña"
                          )}
                          {error("password_confirm")}
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
        <Footer></Footer>        
      </div>
    </React.Fragment>
  );
}

export default RegisterForm;
