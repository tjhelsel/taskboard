import React, { Component } from 'react';
import TaskColumn from './TaskColumn';

const initialData = [
  { name: 'Winnie', color: 'lavendar', tasks: ['task1', 'task2'] },
  { name: 'Bob', color: 'teal', tasks: ['task1', 'task2'] },
  { name: 'Thomas', color: 'orange', tasks: ['task1', 'task2'] },
  { name: 'George', color: 'navy', tasks: ['task1', 'task2'] }
];

const savedData = window.localStorage.getItem('teamMembers');

const teamMembers = savedData ? JSON.parse(savedData) : initialData;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.moveTask = this.moveTask.bind(this);
  }

  addTask(userId, text) {
    console.log('add', userId, text);
    this.setState(prevState => {
      prevState.teamMembers[userId].tasks.push(text);
      return {
        teamMembers: prevState.teamMembers
      };
    });
  }

  removeTask(userId, taskId) {
    this.setState(prevState => {
      const { tasks } = prevState.teamMembers[userId];
      tasks.splice(taskId, 1);
      return {
        teamMembers: prevState.teamMembers
      };
    });
  }

  moveTask(userId, taskId, newUserId) {
    const { teamMembers } = this.state;
    const user = teamMembers[userId];
    const text = user.tasks[taskId];
    if (newUserId === teamMembers.length) newUserId = 0;
    if (newUserId === -1) newUserId = teamMembers.length - 1;
    this.removeTask(userId, taskId);
    this.addTask(newUserId, text);
  }

  saveData() {
    const dataString = JSON.stringify(this.state.teamMembers);
    window.localStorage.setItem('teamMembers', dataString);
  }

  render() {
    return (
      <div className="column-container">
        {/* <h1 className="App-header">Ready to do some coding!</h1> */}
        {this.state.teamMembers.map((teamMember, idx) => (
          <TaskColumn
            key={idx}
            name={teamMember.name}
            color={teamMember.color}
            tasks={teamMember.tasks}
            employeeId={idx}
            moveTask={this.moveTask}
          />
        ))}
        <button type="button" onClick={() => this.saveData()}>
          Save
        </button>
      </div>
    );
  }
}

export default Home;
