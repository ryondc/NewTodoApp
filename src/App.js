import React, { Component } from 'react'; 
import './App.css';
import { TodoApp } from './project/Todoapp/TodoApp';
import { Header } from './Nav/header/Header';
import {Root} from './Nav/root/Root';
import {IndexRoute} from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Page } from './Nav/page/Page';







class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter >
      <div>
        <Route path={"/"} component={Root}/>
        <Route exact path={"/"} component={TodoApp}/>
        <Route path={"/home"} component={TodoApp}/>
        <Route path={"/page"} component={Page}/>    
        </div>
      </BrowserRouter>  
      </div>
    );
  }
}

export default App;
