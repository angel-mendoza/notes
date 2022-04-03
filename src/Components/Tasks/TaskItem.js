import React from 'react';
import { Card, Button } from 'react-bootstrap';


function TaskItem(props) {
  const buttonAction = (completed) => {
    if (completed) {
      return (
        <Button variant="outline-danger" onClick={props.onDelete}>
          Eliminar
        </Button>
      );
    } else {
      return (
        <Button variant="outline-primary" onClick={props.onComplete}>
          Terminar tarea
        </Button>
      );
    }
  }

  return (
    <Card className='mb-1'>
      <Card.Body>
        <Card.Text className={ props.task.completed ? 'text-success' : ''}>
          {props.task.text}
        </Card.Text>
        {
          buttonAction(props.task.completed)
        }
      </Card.Body>
    </Card>
  );
}

export default TaskItem;