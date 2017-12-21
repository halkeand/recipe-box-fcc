import React from 'react';
import Button from './Button';

const Form = props => {
  const { formClass, warning, onChange, ingredientsValue, nameValue, onSubmit } = props;

  return (
    <form className={`form ${formClass ? formClass : ''}`}>
      <label>Recipe Name</label>
      <input
        className="input"
        autoFocus
        name="nameValue"
        onChange={onChange}
        value={nameValue}
        type="text"
        placeholder="Enter a recipe name"/>

      <label>Recipe Ingredients</label>
      <textarea
        className="input ingredients-input"
        name="ingredientsValue"
        onChange={onChange}
        value={ingredientsValue}
        type="text"
        placeholder="Separate ingredients by comma (,)"/>

      <Button
        classList="btn btn-edit"
        btnType="Save"
        onClick={onSubmit}/>

      {
        warning ? <p className="warn-msg">{warning}</p> : ''
      }
    </form>
  )
}

export default Form
