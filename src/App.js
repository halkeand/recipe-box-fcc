import React, { Component } from 'react';
import './stylesheets/App.css';

import { isInputFilled, sanitizeObj, makeArr, giveObjFromId, filterWithoutThisId, getLS, setLS } from './utils';

import Header from './comps/Header';
import Button from './comps/Button';
import Form from './comps/Form';
import RecipesList from './comps/RecipesList';

class App extends Component {
  constructor(props) {
    super(props);

    const giveLSStateOrEmpty = getLS() !== null ? getLS() :
                                {
                                  isAdding: false,
                                  isEditing: '',
                                  form: {
                                    id: 0,
                                    nameValue: '',
                                    ingredientsValue: '',
                                  },
                                  warning: '',
                                  recipesList: []
                                }

    this.state = giveLSStateOrEmpty;
  }


  //- - - - - - - - - - - Formulaire d'AJOUT
  //- - - - - - - - - - - - - - - - - - - -

  //Toggle le bouton d'jaout de recette
  handleBtnClick = (btnType) => {
    const toggleIsAddingState = () => this.setState(prevState => ({
      isAdding: !prevState.isAdding
    }));

    btnType === 'Add' ?  toggleIsAddingState() :
    console.error(`Le type de bouton n'est pas spécifié`);
  }

  //Enregistre les changements du formulaire d'AJOUTS  dans l'état
  handleInputChange = e => {
    const input = e.target.name;
    const value = e.target.value;
    return this.setState(prevState => ({
      form: {
        ...prevState.form,
        [input]: value
      }
    }));
  }

  //S'occude de la validation du formulaire d'AJOUT de nouvelle recette
  handleSubmit = (btnType, e) => {
    const { nameValue, ingredientsValue } = this.state.form;
    e.preventDefault()


    const sendForm = () => {
      const newRecipe = this.state.form;
      newRecipe.ingredientsArr = makeArr(newRecipe.ingredientsValue);

      return this.setState(prevState => ({
        warning: '',
        isAdding: false,
        form: {
          id: prevState.form.id + 1,
          nameValue: '',
          ingredientsValue: '',
        },
        recipesList: prevState.recipesList.concat(sanitizeObj(newRecipe))
      }));
    }

    isInputFilled(nameValue, ingredientsValue) ?
    sendForm() : this.setWarning('You can not save a recipe without a name and an ingredient list')
  }

  //- - - - - - - - - - - Formulaire d'ÉDITION
  //- - - - - - - - - - - - - - - - - - - - -

  //Prend en charge le clique sur un bouton edit et fait apparaître le formulaire approprié
  handleEdit = (e) => {
    const recipeId = Number(e.target.name);
    this.setState(prevState => ({
      isEditing: recipeId,
      editingForm: {
        id: recipeId,
        nameValue: giveObjFromId(prevState.recipesList, recipeId).nameValue,
        ingredientsValue: giveObjFromId(prevState.recipesList, recipeId).ingredientsValue
      }
    }))
  }


  //Supprime la recette visée de la liste
  handleDelete = (e) => {
    const recipeId = Number(e.target.name);
    this.setState(prevState => ({
      isEditing: false,
      recipesList: filterWithoutThisId(prevState.recipesList, recipeId)
    }))
  }

  //Enregistre les nouvelles valeurs d'input dans l'objet EditingForm
  handleEditingChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    return this.setState(prevState => ({
      editingForm: {
        ...prevState.editingForm,
        [input]: value
      }
    }));
  }

  //Fait apparaître un message d'erreur spécifié
  setWarning = (warn) => {
    return this.setState(prevState => ({
      warning: warn
    }));
  }

  //Enregistre les modifications apportés
  handleEditingSave = (btnType, e) => {

    const resetEditingForm = () => {
      return this.setState(prevState => ({
          editingForm: ''
      }))
    }

    const sendForm = () => {
      const newRecipe = this.state.editingForm;
      newRecipe.ingredientsArr = makeArr(newRecipe.ingredientsValue);

      this.setState(prevState => ({
        warning: '',
        isEditing: '',
        recipesList: filterWithoutThisId(prevState.recipesList, newRecipe.id).concat(sanitizeObj(newRecipe))
      }));
      resetEditingForm()
    }

    const { nameValue, ingredientsValue } = this.state.editingForm;
    e.preventDefault()

    isInputFilled(nameValue, ingredientsValue) ?
    sendForm() : this.setWarning('You can not save a recipe without a name and an ingredient list')
  }

  render() {
    //Each time we update the view we update the localstorage
    setLS(this.state);

    const { editingForm, isEditing, recipesList, warning, isAdding, form } = this.state;

    return (
      <div className="App">
        <Header/>
        <main className="main">
          <Button
            classList="btn btn-add-recipe"
            btnType="Add"
            onClick={this.handleBtnClick}
            isAdding={isAdding}/>

          {
            isAdding ?
            <Form
              nameValue={form.nameValue}
              ingredientsValue={form.ingredientsValue}
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
              warning={warning}/> : ''
          }

          <RecipesList
            recipesList={recipesList}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}/>

          {
            typeof isEditing === 'number' ?
            <Form
              formClass="form-editing"
              nameValue={editingForm.nameValue}
              ingredientsValue={editingForm.ingredientsValue}
              onChange={this.handleEditingChange}
              onSubmit={this.handleEditingSave}
              warning={warning}/> : ''
          }
        </main>
      </div>
    );
  }
}

export default App;
