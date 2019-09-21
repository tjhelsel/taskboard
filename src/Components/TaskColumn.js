import React, { Component } from 'react';
import TaskCard from './TaskCard';

class TaskColumn extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cards: ['taskDets1', 'taskDets2']
  //   };
  // }

  addCard(text) {
    this.setState(prevState => ({
      cards: [...prevState.cards, text]
    }));
  }

  render() {
    const {name, color, tasks, employeeId, moveTask} = this.props
    return (
      <div className="column">
        <div className="column-header" id={`${color}-header`}>{name}</div>
        {tasks.map((card, idx) => (
          <TaskCard
            key={idx}
            text={card}
            moveTask={moveTask}
            employeeId={employeeId}
            taskId={idx}
          />
        ))}

        <button
          type="button"
          className="add-button"
          onClick={() => {
            const taskText = window.prompt('Enter the task description below:');
            this.addCard(taskText);
          }}
        >
          + Add a card
        </button>

        {/* <button type="button" className="add-button" onClick={()=> this.addCard()}>+ Add a card</button> */}
      </div>
    );
  }
}

export default TaskColumn;
