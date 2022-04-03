import React from 'react';
import { TasksContext } from '../../Context/TasksContext';

function TaskCounter() {
  const {totalTasks, completedTasks} = React.useContext(TasksContext);
  return (
    <h5 className="mb-3 text-center">Has completado {completedTasks} de {totalTasks}</h5>
  );
}

export default TaskCounter;