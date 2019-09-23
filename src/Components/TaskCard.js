import React from 'react';

const TaskCard = props => {
  const { moveTask, text, date, employeeId, taskId, removeTask } = props;
  return (
    <div>
      <div className="card">
        <button
          type="button"
          onClick={() => moveTask(employeeId, taskId, employeeId - 1)}
        >
          {' '}
          {'<'}{' '}
        </button>
        <div className="task-details">
          <p>{text}</p>
          <small className="task-date">Updated: {date}</small>
          <button
            type="button"
            className="delete-button"
            onClick={() => removeTask(employeeId, taskId)}
          >
            {' '}
            Delete
          </button>
        </div>
        <button
          type="button"
          onClick={() => moveTask(employeeId, taskId, employeeId + 1)}
        >
          {' '}
          {'>'}{' '}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
