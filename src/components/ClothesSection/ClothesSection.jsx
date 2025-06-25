import './ClothesSection.css';
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({ onCardClick, clothingItems, handleAddClick }) {

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
                />
              );
            })}
        </ul>
        </div>
    )
}