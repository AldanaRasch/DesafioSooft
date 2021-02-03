import React from "react";
import PropTypes from "prop-types";

const Ejercicio1 = ({ value }) => {
  const str = "*";
  const v = value;
  const newArray = [0, 0, 0, 0, 0];
  const generarArrayDeHistograma = () => {
    for (let index = 0; index < v.length; index++) {
      const item = v[index];
      newArray[item - 1] += 1;
    }
    return newArray;
  };
  return (
    <div >
      {/* acá luego hacer funcion para recorrer value y mostrar mas lindo el array */}
      <div className="lineArray">
        Array cargado:
        <label>{value}</label>
      </div>
      <div>
        <div className=" histograma-titulo">
          Histograma 
        </div>

        <div className="histograma-ejercicio1">
          {generarArrayDeHistograma(), newArray.map((item, index) => {
            return (
              <div>
                <div>
                  {index + 1}: {str.repeat(item)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Ejercicio1.propTypes = {
  value: PropTypes.array
};
export default Ejercicio1;
