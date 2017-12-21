import React from 'react';

const Button = props => {

  //Permet de passer la prop btnType à l'event handler du composant parent
  const boundClick = props.onClick.bind(this, props.btnType);

  return <button
          className={`animated lightSpeedIn ${props.classList}`}
          onClick={boundClick}>
          {
            props.isAdding === undefined ?
            props.btnType :
            props.isAdding === true ? 'Close' :
            props.isAdding === false ? 'Add a new recipe' : ''
          }
        </button>
}

export default Button
