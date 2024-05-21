import React from 'react';

interface ModalWindowProps {
  closeModal: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Coming Soon!</h2>
        <p>We&apos;re working hard to bring this feature to you. Stay tuned!</p>
        <button onClick={closeModal} className="modal-content__close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
