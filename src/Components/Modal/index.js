import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';

import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <Card body>
        {children}
      </Card>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;