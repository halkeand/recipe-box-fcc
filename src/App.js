import React, { Component } from 'react';
import HeaderTitle from './comps/HeaderTitle';
import Button from './comps/Button';
import './App.css';

class App extends Component {
  handleBtnClick = (btnType) => {
    console.log(btnType);
  }
  render() {
    return (
      <div className="App">
        <HeaderTitle/>
        <Button
          btnType="Add"
          onClick={this.handleBtnClick}/>
      </div>
    );
  }
}

export default App;
