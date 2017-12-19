import React from 'react';
import Button from './Button';

const Form = props => {
  const { formClass, warning, onChange, ingredientsValue, nameValue, onSubmit } = props;

  return (
    <form className={`form ${formClass ? formClass : ''}`}>
      <label>Recipe Name
        <input
          className="input"
          autoFocus
          name="nameValue"
          onChange={onChange}
          value={nameValue}
          type="text"
          placeholder="Enter a recipe name"/>
      </label>

      <label>Recipe Ingredients
        <textarea
          className="input ingredients-input"
          name="ingredientsValue"
          onChange={onChange}
          value={ingredientsValue}
          type="text"
          placeholder="Separate ingredients by comma (,)"/>
      </label>

      <Button
        btnType="Save"
        onClick={onSubmit}/>

      {
        warning ? <p className="warn-msg">{warning}</p> : ''
      }
    </form>
  )
}

export default Form
