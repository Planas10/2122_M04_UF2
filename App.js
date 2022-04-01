import React from 'react';
import './App.css';
import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		
		};
	};
	
	handleSubmit = event => {
		console.log(event.target.value);
	}
	
	render() {
		return ( 
			<div className="App"> 
			<Title />
			<TaskForm handleSubmit={this.handleSubmit}/> 
			<TaskList />
			</div>

		);
	}
}

export default App; 
