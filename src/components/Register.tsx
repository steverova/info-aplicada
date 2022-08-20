import "../public/css/style.css";
import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Register() {

    return (
        <React.Fragment>
            <div id='register-body'>
                <div className="container pt-5">
                    <div className="col-md-8 col-lg-5 mx-auto">
                        <div className="card ">
                            <h5 id="card-header" className="card-header">Agregar Persona</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="">Nombre</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            placeholder="Ingrese su nombre"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="">Apellido</label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            placeholder="Ingrese su apellido"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-3 ">
                                        <label htmlFor="">Cedula</label>
                                        <input
                                            type="number"
                                            name="cedula"
                                            placeholder="Ingrese su cedula"
                                            required
                                        />
                                    </div >


                                    <button className="btn btn-secondary" type="submit">
                                        Registrarse
                                    </button>
                                    <Link to="/login">
                                    <small className="">
                                        <p className="mt-3">¿Ya tiene una cuenta? <strong>Inicie sesion</strong></p>
                                    </small>
                                    </Link>
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