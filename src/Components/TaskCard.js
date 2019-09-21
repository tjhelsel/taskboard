import React from 'react';

const TaskCard = props => {
  return (
    <div className="card">
      <button
        type="button"
        onClick={() =>
          props.moveTask(props.employeeId, props.taskId, props.employeeId - 1)
        }
      >
        {' '}
        {'<'}{' '}
      </button>
      <p>{props.text}</p>
      <button
        type="button"
        onClick={() =>
          props.moveTask(props.employeeId, props.taskId, props.employeeId + 1)
        }
      >
        {' '}
        {'>'}{' '}
      </button>
    </div>
  );
};

export default TaskCard;
