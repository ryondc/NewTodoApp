import React, { Component } from 'react'; 
import './App.css';
import { TodoApp } from './project/Todoapp/TodoApp';
import {Root} from './Nav/root/Root';
import { BrowserRouter  , Route } from 'react-router-dom';
import { Progress } from './project/Progressapp/ProgressApp';







class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter >
      <div>
        <Route path={"/"} component={Root}/>
        <Route exact path={"/"} component={TodoApp}/>
        <Route path={"/home"} component={TodoApp}/>
        <Route path={"/page"} component={Progress}/>    
        </div>
      </BrowserRouter>  
      </div>
    );
  }
}

export default App;
