import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0 , 0.5)',
  },
  modal: {
    width: '600px',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: '5px',
  },
});

const Modal = ({ onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modal}>
        <h2>Modal title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          eveniet sequi soluta reprehenderit nulla vitae!
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
