import React from "react";
import PropTypes from "prop-types";

class Activity extends React.Component {
  render() {
    return (
      <div className="Activity col">
        <div className="container h-100 contenedor-actividad p-2">
          <div className="contenido-card  container-fluid p-0 border-0">
            <div className="container-fluid fondo-sup"> fondo superior </div>
            <div className="container-fluid contenido-principal p-0">
              <div className="container-fluid titulo p-1 d-flex">
                <div className="container texto p-0 m-4 d-flex align-items-center ">
                  {this.props.data.title}
                </div>
                <div className="container boton p-0 d-flex justify-content-end align-items-center">
                  <button className="btn bg-transparent p-0 m-3">
                    <i
                      class="fas fa-ellipsis-h"
                      style={{
                        color: "white",
                      }}
                    ></i>
                  </button>
                </div>
              </div>
              <div className="container-fluid contenido p-1">
                <div className="container-fluid horas">
                  <p className="lead"> 10 hrs </p>
                </div>
                <div className="container-fluid tiempo">
                  <p className="lead"> Last Week - 36 hrs </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  data: PropTypes.object,
};

Activity.defaultProps = {
  data: {
    title: "Actividad",
  },
};

export default Activity;
