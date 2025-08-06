import "./ItemModal.css";
import "../DeleteModal/DeleteModal.css"
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ onClose, card, isOpen, handleDeleteClick }) {
   const { currentUser } = useContext(CurrentUserContext);
  if (!card) return null;

  const isOwn = currentUser ? card.owner === currentUser._id : false;
  const itemDeleteButtonClassName = `modal__item-dlt-btn ${isOwn ? 'modal__item-dlt-btn_visible' : 'modal__item-dlt-btn_hidden'}`;

  function handleDelete() {
    handleDeleteClick(card);
  }

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
            <button className={itemDeleteButtonClassName} type="button" onClick={handleDelete}>Delete Item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
