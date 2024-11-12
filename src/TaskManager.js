import React, { Component } from 'react';
import TaskList from './TaskList';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskText: '', 
    };
  }

  handleInputChange = (event) => {
    this.setState({ taskText: event.target.value });
  };

  handleAddTask = () => {
    const { taskText, tasks } = this.state;
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,  
      };
      this.setState({
        tasks: [...tasks, newTask],
        taskText: '',
      });
    }
  };

  handleDeleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks: updatedTasks });
  };

  handleToggleCompletion = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, taskText } = this.state;
    return (
      <div>
        <h1>Task Manager</h1>
        <div>
          <input
            type="text"
            value={taskText}
            onChange={this.handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>
        <TaskList
          tasks={tasks}
          onDeleteTask={this.handleDeleteTask}
          onToggleCompletion={this.handleToggleCompletion}
        />
      </div>
    );
  }
}

export default TaskManager;



// import React, { Component } from 'react';
// import TaskList from './TaskList';
// class TaskManager extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tasks: [
//          'Buy groceries',
//         'Clean the house',
//         'Finish project report',
//         'Read a book'
//       ]
//     };
//   }


//   // renderTasks = () => {
//   //   return this.state.tasks.map((task, index) => (
//   //     <li key={index}>
//   //       {task}
//   //     </li>
//   //   ));
//   // };

//   render() {
//     return (
//       <div>
//         <h1>Task Manager</h1>
//         <TaskList tasks={tasks} />
//         {/* <ul>
//           {this.renderTasks()} 
//         </ul> */}
//       </div>
//     );
//   }
// }

// export default TaskManager;


