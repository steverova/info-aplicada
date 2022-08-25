import React from "react";

function CustomFooter() {
  return (
    <React.Fragment>
      <div className=" myfooter p-3 border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="text-center">
                <h4>Desarrollador</h4>
                <div>
                  <i className="fa-solid fa-user"></i> Steven Rojas
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="text-center">
                <h4>Institución</h4>
                <div>Universidad de Costa Rica</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div className="text-center">
                <h4>Curso</h4>
                <div>IF6201</div>
                <div>Informatica aplicada a los Negocios</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row col-12">
              <div className="mx-auto mt-3">
                Copyright © <b>😾😾😾😾</b> 2022. Todos los derechos reservados
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomFooter;
