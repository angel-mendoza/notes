import React from 'react';
import {Form, Button } from 'react-bootstrap';
import { TasksContext } from '../../Context/TasksContext';


function TaskForm({setOpenModal}) {

  const {addTask} = React.useContext(TasksContext);
  const [newTaskValue, setNewTaskValue] = React.useState('');

  const onChange = (e) => {
    setNewTaskValue(e.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmitTask = (e) => {
    e.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false)
  }

  return (
    <Form onSubmit={onSubmitTask}>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          value={newTaskValue}
          placeholder="Crea tu nueva tarea"
          style={{ height: '100px' }}
          onChange={onChange}
        />
      </Form.Group>
      <Button type='button' onClick={onCancel} variant="outline-danger">Cerrar</Button>
      <Button type='submit' className='float-end'  variant="outline-success">Crear tarea</Button>

    </Form>
  );
}

export default TaskForm;