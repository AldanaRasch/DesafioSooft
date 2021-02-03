import React, { Component } from "react";
import "../App.css";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import ButtonMenu from "./ButtonMenu";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        arrayCargado: [1, 2, 1, 3, 3, 1, 2, 1, 5, 1]
      }
    };
  }

  //   array hardcodeado porque no me alcanzo el tiempo para hacer funcionar
  // el insertar numeros en el array vacio, ni para validar los valores
  // ingresados por teclado.

  //   onClickAgregar = e => {
  //       console.log("evento en el onclick", e)
  //     const newArray = this.state.arrayCargado.slice();
  //     newArray.push(e.target.value);
  //     this.setState({
  //       form: { ...this.state.form, arrayCargado: newArray }
  //     });
  //   };

  render() {
    const v = this.state.form.arrayCargado;
    console.log("arrayCargado", v);
    return (
      <div>
        <div className="react-desafio">¡Bienvenidos SooftTechnology!</div>
        <div className="react-desafio-menu">

          {/* esto en caso que fuera un menu de opciones extensible
           <ButtonMenu nomButton="Ejercicio 1"></ButtonMenu>
            <ButtonMenu nomButton="Ejercicio 2"></ButtonMenu> */}
          <div>
            <div className="boton-desafio-menu">Ejercicio 1</div>
            <div className="ingrese-vector histograma-ejercicio1">
              <form>
                <label className="histograma-ej">
                  Ingrese 10 n° entre 1-5:
                </label>
                <input className="input-numeros"></input>
                <button
                //   onClick={e => {
                //     this.onClickAgregar(e);
                //   }}
                >
                  Agregar número
                </button>
              </form>
            </div>
            <Ejercicio1 value={v} />
          </div>
          <div>
            <div className="boton-desafio-menu">Ejercicio 2</div>
            <Ejercicio2/>
          </div>
        </div>
      </div>
    );
  }
}
export default Principal;
