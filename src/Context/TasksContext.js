import React from 'react';
import useLocalStorage from '../CustomHook/useLocalStorage';

const TasksContext = React.createContext();

function TasksProvider (props) {
  const {item: tasks, saveItem: saveTasks, loading, error} = useLocalStorage('task_v1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if (!searchValue >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(task => {
      const taskText = task.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchText);
    })
  }

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTask = [...tasks];
    newTask[taskIndex].completed = true;
    saveTasks(newTask)
  }

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTask = [...tasks];
    newTask.splice(taskIndex, 1);
    saveTasks(newTask)
  }

  const addTask = (text) => {
    const newTask = [...tasks];
    newTask.push({
      completed: false,
      text
    });
    saveTasks(newTask)
  }

  return (
    <TasksContext.Provider
    value={{
      error,
      tasks,
      loading,
      openModal,
      totalTasks,
      searchValue,
      completedTasks,
      searchedTasks,
      addTask,
      deleteTask,
      setOpenModal,
      completeTask,
      setSearchValue,
    }}
    >
      {props.children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider};

