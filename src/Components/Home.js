import React, { Component } from 'react';
import TaskColumn from './TaskColumn';

const initialData = [
  { name: 'Pending app', color: 'lavender', tasks: [] },
  { name: 'App sent', color: 'teal', tasks: [] },
  { name: 'Phone screen completed', color: 'orange', tasks: [] },
  { name: 'Decision received', color: 'navy', tasks: [] }
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
    if (text === '') return;
    const today = new Date();
    const date = `${today.getMonth() +
      1}/${today.getDate()}/${today.getFullYear()}`;
    this.setState(prevState => {
      prevState.teamMembers[userId].tasks.push({ text, date });
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
    const {text} = user.tasks[taskId];
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
      <div>
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
              addTask={this.addTask}
              removeTask={this.removeTask}
            />
          ))}
        </div>
        <button type="button" onClick={() => this.saveData()}>
          Save
        </button>
      </div>
    );
  }
}

export default Home;
