import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__image" src={Logo} alt="brainflix-logo" />
        <form className="header__form">
          <div className="header__wrapper">
            <input className="header__input" placeholder="Search" type="text" />
            <img className="header__avatar" src={Avatar} alt="mohan-avatar" />
          </div>
          <button className="header__btn">Upload</button>
          <img className="header__avatar-2" src={Avatar} alt="mohan-avatar" />
        </form>
      </div>
    </header>
  );
}

export default Header;
