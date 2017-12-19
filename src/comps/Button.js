import React from 'react';

const Button = props => {

  //Permet de passer la prop btnType à l'event handler du composant parent
  const boundClick = props.onClick.bind(this, props.btnType);

  return <button
          className="btn"
          onClick={boundClick}>
          {props.btnType || 'Button'}
        </button>
}

export default Button
