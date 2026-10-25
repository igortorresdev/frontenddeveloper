function Modal({ question, onCancel, onConfirm }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
