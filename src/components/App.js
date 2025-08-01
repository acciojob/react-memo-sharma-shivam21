import React, { useState, useCallback } from 'react';
import UseMemoComponent from './UseMemo';
import TaskList from './ReactMemo';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  const handleCustomInput = (e) => {
    setCustomTask(e.target.value);
  };

  const addCustomTask = () => {
    if (customTask.trim().length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters');
    }
  };

  const memoizedAddTodo = useCallback(addTodo, [todos]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Task Manager</h2>

      <button onClick={memoizedAddTodo}>Add Todo</button>

      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={customTask}
          onChange={handleCustomInput}
          placeholder="Enter custom task"
        />
        <button onClick={addCustomTask}>Submit Task</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={incrementCounter}>Increment</button>
        <p>Counter: {counter}</p>
      </div>

      <TaskList tasks={todos} />

      <UseMemoComponent tasks={todos} />
    </div>
  );
};

export default App;
