import "./ItemModal.css";
import "../DeleteModal/DeleteModal.css"

function ItemModal({ onClose, card, isOpen, onDeleteClick, itemId }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        />
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
            <button type="button" className="modal__item-dlt-btn" onClick={() => onDeleteClick(itemId)} >Delete Item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
