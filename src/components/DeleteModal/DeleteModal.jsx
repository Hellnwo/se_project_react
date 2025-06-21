import './DeleteModal.css'

function DeleteModal({ onClose, isOpen, onDeleteBtn }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        />
        <div className="modal__dlt-content">
          <p className="modal__dlt-caption">Are you sure you want to delete this item?</p>
          <p className="modal__dlt-caption">This action is irreversible.</p>
        <button type="button" className="modal__dlt-btn" onClick={onDeleteBtn} >Yes, delete item</button>
          <button type="button" className="modal__cncl-btn" onClick={onClose} >Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;