import React from "react";
import "../App.css";
import PropTypes from "prop-types";

const ButtonMenu = ({nomButton}) => {
  return (
    <div
      className="boton-desafio-menu"
      // onClick={() => {
      //   clickHandler();
      // }}
    >
      {nomButton}
    </div>
  );
};
ButtonMenu.propTypes = {
  nomButton: PropTypes.string,
  clickHandler: PropTypes.func
};
export default ButtonMenu;
