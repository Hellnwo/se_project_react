import './Profile.css';
import { useContext } from "react";
import Sidebar from '../Sidebar/Sidebar';
import ClothesSection from '../ClothesSection/ClothesSection';
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Profile ({ handleCardClick, clothingItems, handleAddClick, handleDeleteClick, handleEditProfileClick, handleSignOutClick, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar handleEditProfileClick={handleEditProfileClick} handleSignOutClick={handleSignOutClick}/>
      </section>
      <section className="profile__clothing-items">
        <ClothesSection  clothingItems={clothingItems} handleCardClick={handleCardClick} handleAddClick={handleAddClick} handleDeleteClick={handleDeleteClick} handleCardLike={handleCardLike} />
      </section>
    </div>
  );
}
