import React from "react";

const Ejercicio2 = () => {
  //   function onClickGenerar(e) {
  //     console.log("evento en el onclick", e);
  //     const numero = e.target.value;
  //     return numero
  //   }


  // tamaño 5 hardcodeado que deberia poder ingresar por pantalla
  const numero = [2, 0, 5, 0, 0, 0];
  const str = "_";

  return (
    <div className="ingrese-vector histograma-ejercicio1">
      <form>
        <label className="histograma-ej">Ingrese n° del tamaño de X:</label>
        <input className="input-numeros"></input>
        <button
        //   onClick={e => {
        //     this.onClickGenerar(e);
        //   }}
        >
          Generar
        </button>
        <div>
          {numero.map((item, index) => {
            return (
              <div>
                {str.repeat(numero.length - index )}X{str.repeat(index + 1)}X
                {str.repeat(numero.length - index)}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default Ejercicio2;
