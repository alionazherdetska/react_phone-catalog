import React from 'react';

const ModalWindow: React.FC = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Coming Soon!</h2>
        <p>We&apos;re working hard to bring this feature to you. Stay tuned!</p>
        <button className="modal-content__close-button">Close</button>
      </div>
    </div>
  );
};

export default ModalWindow;
