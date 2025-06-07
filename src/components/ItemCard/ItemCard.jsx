import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <img onClick={handleCardClick} src={item.link} alt={item.name} />
    </div>
  );
}

export default ItemCard;
