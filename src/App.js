import React from 'react';
import { TasksProvider } from './Context/TasksContext';
import AppUI from './AppUI';

function App() {

  return (
    <React.StrictMode>
      <TasksProvider>
        <AppUI />
      </TasksProvider>
    </React.StrictMode>
  );
}

export default App;
