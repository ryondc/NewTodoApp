import React, { Component } from 'react';
import './App.css';
import { TodoApp } from './project/Todoapp/TodoApp';
import { Root } from './Nav/root/Root';
import { BrowserRouter, Route } from 'react-router-dom';
import { Progress } from './project/Progressapp/ProgressApp';
import { AutoComplete } from './project/AutoComplete/AutoComplete';
import { onscrollAjax } from './project/OnscrollAjax/OnscrollAjax';
import { FetchApi } from './project/FetchApi/FetchApi';
import { SubmitAjax } from './project/SubmitAjax/SubmitAjax';
import { Regex } from './project/Regex/Regex';
import { Upload } from './project/Upload and download/Upload';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<Route path={'/'} component={Root} />
						<Route exact path={'/'} component={TodoApp} />
						<Route path={'/home'} component={TodoApp} />
						<Route path={'/progress'} component={Progress} />
            <Route path={'/autocomplete'} component={AutoComplete} />
            <Route path={'/fetchapi'} component={FetchApi} />
            <Route path={'/onscrollajax'} component={onscrollAjax} />
            <Route path={'/submitajax'} component={SubmitAjax} />
            <Route path={'/regex'} component={Regex} />
            <Route path={'/upload'} component={Upload} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
