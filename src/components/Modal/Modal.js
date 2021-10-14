import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
 


const Modal = props => {

  
  const content = (
 
     
  <div className={`modal movein`} >
      <header className="modal__header">
        <h1>{props.title}</h1>
      </header>
      <div className="modal__content">{props.children}</div>
      <div className="modal__actions">
        <Button design="danger" mode="flat" onClick={props.onCancelModal}>
          Cancel
        </Button>
        <Button
          mode="raised"
          onClick={props.onAcceptModal}
          // disabled={!props.acceptEnabled}
          // loading={props.isLoading}
        >
          Accept
        </Button>
      </div>
    </div>
 
    
  )
  
      
  
 
 return ReactDOM.createPortal(content, document.getElementById('modal-root'));
  }
export default Modal;
