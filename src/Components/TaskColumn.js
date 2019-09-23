import React, { Component } from 'react';
import TaskCard from './TaskCard';

class TaskColumn extends Component {
  render() {
    const {
      name,
      color,
      tasks,
      employeeId,
      moveTask,
      addTask,
      removeTask
    } = this.props;
    return (
      <div className="column">
        <div className="column-header" id={`${color}-header`}>
          {name}
        </div>
        {tasks.map((task, idx) => (
          <TaskCard
            key={idx}
            text={task.text}
            date={task.date}
            moveTask={moveTask}
            employeeId={employeeId}
            taskId={idx}
            removeTask={removeTask}
          />
        ))}

        <button
          type="button"
          className="add-button"
          onClick={() => {
            const taskText = window.prompt('Enter the task description below:');
            addTask(employeeId, taskText);
          }}
        >
          + Add a card
        </button>
      </div>
    );
  }
}

export default TaskColumn;
