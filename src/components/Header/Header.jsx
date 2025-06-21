import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
      <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <p className="header__caption">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button onClick={handleAddClick} type="button" className="header__button">
        + Add Clothes
      </button>
      <Link to="/profile" className="header__link">
      <div className="header__user-section">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="avatar" className="header__avatar" />
      </div>
      </Link>
    </header>
  );
}

export default Header;
