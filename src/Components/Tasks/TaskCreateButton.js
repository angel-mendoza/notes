import React from 'react';
import Button from 'react-bootstrap/Button';

function TaskCreateButton({setOpenModal}) {
  return (
    <div className="d-grid gap-2">
      <Button
        variant="outline-primary"
        onClick={() => setOpenModal(true)}
      >
        Crear tarea nueva
      </Button>
    </div>
  );
}

export default TaskCreateButton;