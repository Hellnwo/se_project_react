import './ClothesSection.css';
import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function ClothesSection({ onCardClick, handleCardLike, clothingItems, handleAddClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  const userCards = clothingItems.filter((card) => card.owner === currentUser?._id)
  
    return(
        <div className="clothes-section">
            <div className="clothes-section__text">
                <p className="clothes-section__caption">Your Items</p>
                <button className="clothes-section__button" type="button" onClick={handleAddClick} >+ Add New</button>
            </div>
            <ul className="clothes-section__items">
          {clothingItems
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                  handleCardLike={handleCardLike}
                />
              );
            })}
        </ul>
        </div>
    )
}