import React from 'react';
import './RemoveTask.css';


import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import michiTriste from	"./assets/michitriste.jpg";

class RemoveTask extends React.Component{

	constructor (props){
		super(props);
		this.state = { 
			open: false
		};
	
	}

	handleOnClick = ()=> {
	this.setState({open: true });

	}


	handleClose = () => {
	this.setState({open:false});
	}

	handleDelete = () => {
	this.props.removeTask(this.props.task_id);
	this.setState({open:false});

	}


 render() {
 	return (
	<div>
		<Button variant="contained" 
				startIcon=<DeleteIcon /> 
				onClick={this.handleOnClick}


			//	{function(event){	
					
					//props.removeTask(props.task_id);

				
				
		>	

		BORRAR
		 
		</Button>

		<Dialog  
			open={this.state.open}
			onClose={this.handleClose}
			>
			<DialogTitle>
				{'La tarea vendra buscando venganza...'}
					</DialogTitle>

			<DialogContent>

				<img id="michi" src={michiTriste} />
					</DialogContent>

			<DialogActions>
				<Button onClick={this.handleDelete}>
					ELIMINAR
						</Button>
				<Button onClick={this.handleClose}> 

					ATRÁS
					</Button>

			</DialogActions>
		</Dialog>
	</div>



	);

	}
}
export default RemoveTask;
