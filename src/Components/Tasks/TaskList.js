import React from 'react';
import {Card, Placeholder} from 'react-bootstrap';
function TaskList(props) {
  const numberCards = Math.floor(Math.random()*10);
  const lengthPlaceholder = () => Math.floor(Math.random()*10);
  const loadingContent = [];

  if (props.loading) {
    for (let index = 0; index < numberCards; index++) {
      loadingContent.push(
        <Card className='mb-2' key={index}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={lengthPlaceholder()} />
              <Placeholder xs={lengthPlaceholder()} />
            </Placeholder>
          </Card.Body>
        </Card>
      )
    }
    return loadingContent;

  } else if (props.error) {
    return (
      <h1>Lo sentimos, ocurrio un error</h1>
    );
  } else if (props.tasks.length <= 0) {
    return (
      <h2 className='text-center'>No tienes tareas agregadas.</h2>
    );
  } else {
    return props.children;
  }
}

export default TaskList;