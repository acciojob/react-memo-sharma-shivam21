import React from 'react';

const TaskList = ({ tasks }) => {
  console.log('Rendering TaskList');
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TaskList);
