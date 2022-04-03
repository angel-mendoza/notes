import React from 'react';

import {
  Col,
  Row,
  Card,
  Container,
} from 'react-bootstrap';

import TaskForm from './Components/Tasks/TaskForm';
import TaskItem from './Components/Tasks/TaskItem';
import TaskList from './Components/Tasks/TaskList';
import TaskSearch from './Components/Tasks/TaskSearch';
import TaskCounter from './Components/Tasks/TaskCounter';
import TaskCreateButton from './Components/Tasks/TaskCreateButton';

import { TasksContext } from './Context/TasksContext';
import Modal from './Components/Modal';

function AppUI() {
  const {
    loading,
    error,
    searchedTasks,
    tasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal
  } = React.useContext(TasksContext);

  return (
    <Container className='app-container'>
      <Row>
        <Col className='p-3'>
          <Card className='mb-4' body>
            <TaskCounter />
            <TaskSearch />
            <TaskCreateButton setOpenModal={setOpenModal} />
          </Card>
          <TaskList loading={loading} error={error} tasks={tasks}>
          {
            searchedTasks.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                onComplete={() => completeTask(task.text)}
                onDelete={() => deleteTask(task.text)}
              />
            ))
          }
        </TaskList>
        {
          openModal && (
            <Modal>
              <TaskForm
                setOpenModal={setOpenModal}
              />
            </Modal>
          )
        }
        </Col>
      </Row>
    </Container>
  );
}

export default AppUI;