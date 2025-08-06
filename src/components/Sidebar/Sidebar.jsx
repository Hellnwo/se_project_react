import './Sidebar.css';
import { useContext } from "react";
import avatar from "../../assets/avatar.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar ({ handleSignOutClick, handleEditProfileClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={currentUser?.avatar || avatar} alt="user s avatar" />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__buttons">
        <button className="sidebar__button" onClick={handleEditProfileClick}>Change profile data</button>
        <button className="sidebar__button" onClick={handleSignOutClick}>Log out</button>
      </div>
    </div>
  );
}