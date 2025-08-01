import React, { useMemo } from 'react';

const UseMemoComponent = ({ tasks }) => {
  const longTasksCount = useMemo(() => {
    console.log('Calculating long tasks...');
    return tasks.filter(task => task.length > 5).length;
  }, [tasks]);

  return (
    <div>
      <h4>Tasks longer than 5 characters: {longTasksCount}</h4>
    </div>
  );
};

export default UseMemoComponent;
