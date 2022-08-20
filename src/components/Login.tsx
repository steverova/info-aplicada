import "../public/css/style.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from "react";

function Register() {

    return (
        <React.Fragment>
            <div id='register-body'>
                <div className="container pt-5">
                    <div className="col-md-8 col-lg-5 mx-auto">
                        <div className="card ">
                            <h5 id="card-header" className="card-header">Iniciar Sesion</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="">Correo</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            placeholder="Ingrese su correo"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="">Contraseña</label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            placeholder="Ingrese su contraseña"
                                            required
                                        />
                                    </div>

                                    <button className="btn btn-secondary" type="submit">
                                        Iniciar sesión
                                    </button>

                                    <Link to="/register">
                                    <small className="">
                                        <p className="mt-3">¿No tiene cuenta? <strong>Registrese</strong></p>
                                    </small>
                                    </Link>

                                    <small>
                                        <p>Volver a <strong>Inicio</strong></p>
                                    </small>
                                </form >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );

}

export default Register;