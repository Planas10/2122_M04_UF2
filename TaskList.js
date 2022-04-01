import TaskItem from './TaskItem';

function TaskList ()
{
	let lista = ["Uno", "Dos", "Tres"];
	
	let tasks = [];
	
	for (let i = 0; i < lista.lenght; i++){
		tasks.push(<TaskItem task={lista[i]} key={i} />);
	}
	
	return (
	<ul>
		{tasks}	
	</ul>
	);
}

export default TaskList;
