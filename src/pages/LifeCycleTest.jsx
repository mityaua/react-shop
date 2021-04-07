import { useState } from 'react';
import Timer from '../components/Timer';
import Modal from '../components/Modal';

const LifeCycleTest = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTimerToggle = () => {
    setShowTimer(prev => !prev);
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="test">
      <h2>Test page</h2>

      <button type="button" onClick={handleTimerToggle}>
        {showTimer ? 'Hide' : 'Show'}
      </button>

      {showTimer && <Timer />}

      <hr />
      <button type="button" onClick={toggleModal}>
        Show modal
      </button>

      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
};

export default LifeCycleTest;
