import React from 'react';
import Button from './Button';

const Form = props => {
  const { formClass, formType, warning, onChange, ingredientsValue, nameValue, onSubmit } = props;

  return (
    <form className={`form animated rotateInDownLeft ${formClass ? formClass : ''}`} id={formType}>
      <h1 className="form-title">{formType}</h1>
      <label className="animated bounceInRight">Recipe Name</label>
      <input
        className="input animated bounceInRight"
        autoFocus
        name="nameValue"
        onChange={onChange}
        value={nameValue}
        type="text"
        placeholder="Enter a recipe name"/>

      <label className="animated bounceInRight">Recipe Ingredients</label>
      <textarea
        className="input ingredients-input animated bounceInRight"
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
        warning ? <p className="warn-msg animated wobble">{warning}</p> : ''
      }
    </form>
  )
}

export default Form
