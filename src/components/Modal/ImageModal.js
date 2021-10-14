import React from 'react';
import ReactDOM from 'react-dom';

  

const imageModal = props =>
  ReactDOM.createPortal(
    <div className="image--modal fadein">
    
      <div className="image--modall__content">{props.children}</div>
      <div className="image--modal__actions">
  
      </div>
    </div>,
    document.getElementById('image-modal-root')
  );

export default imageModal;
