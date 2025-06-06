import "./Header.css";
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';

function Header({ handleAddClick }) {
  return (
    <header className='header'>
      <img src={logo} className='header__logo' />
      <p className='header__caption'>Weather Placeholder</p>
      <button onClick={handleAddClick} type='button' className='header__button'>+ Add Clothes</button>
      <div className='header__user-section'>
        <p className='header__username'>Terrence Tegegne</p>
        <img src={avatar} alt='avatar' className='header__avatar' />
      </div>
    </header>
  );
}

export default Header;
