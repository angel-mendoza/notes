import React from 'react';

import Form from 'react-bootstrap/Form';
import { TasksContext } from '../../Context/TasksContext';

function TaskSearch() {
  const { searchValue, setSearchValue } = React.useContext(TasksContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Control
          placeholder="Buscas tus notas.."
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </Form.Group>
    </Form>
  );
}

export default TaskSearch;