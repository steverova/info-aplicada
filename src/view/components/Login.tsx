import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { useUser } from "../../contexts/UserContext";
import loginSchema from "../../validations/LoginFormValidation";
import Footer from "../../view/page/CustomFooter";
import Header from "../../view/page/CustomHeader";

function Register() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [logindata, setLogindata] = useState("");
  const {setData} = useUser();

  const onSubmit = (logindata: any) => {
    setLogindata(JSON.stringify(logindata));
    setData(logindata);
    navigate("/home");
  };
  

  return (
    <React.Fragment>
      <div id="register-body">
        <Header></Header>
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
                          ? "3px solid rgb(216, 52, 79)"
                          : "",
                      }}
                      placeholder={
                        errors.email
                          ? "Este campo es requerido*"
                          : "Ingrese su correo"
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

                  <div className="form-group">
                    <label htmlFor="">Correo</label>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      style={{
                        border: errors.email
                          ? "3px solid rgb(216, 52, 79)"
                          : "",
                      }}
                      placeholder={
                        errors.email
                          ? "Este campo es requerido*"
                          : "Ingrese su correo"
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

                  <button
                    className="btn btn-cpurple btn-block d-flex justify-content-center align-content-between"
                    type="submit"
                  >
                    <i className="material-symbols-outlined mr-1">login</i>
                    Iniciar sesi&oacute;n
                  </button>
                </form>
                <p>{logindata}</p>
              </div>

              <div className="panel-footer d-flex justify-content-center">
                <Link to="/register">
                  <h5 className="p-4">
                    No tiene cuenta? <span>Registrese</span>
                  </h5>
                </Link>
              </div>
            </div>
            <div></div>

            <div className="mt-3 mb-5">
              <Link to="/register">
                <h6 className="bottom-title">Volver al inicio</h6>
              </Link>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default Register;