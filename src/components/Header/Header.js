
import React from "react";
import { NavLink, Link } from "react-router-dom";
import Burger from "../../Ui-Kit/Burger/Burger";
import Social from "../../Ui-Kit/Social/Social";
import logo from '../../images/Logo/logo.png'
import "../../styles/technicalClasses.scss"
import "./Header.scss"

function Header() {
  const [menuStatus, setMenuStatus] = React.useState(false)
  const activeClassName = "header__item_active"

  const activeMenu = () => {
    setMenuStatus(!menuStatus)
  }

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        <nav className={menuStatus ? "header__nav _active" : "header__nav"}>
          <ul className="header__list">
            <li className="header__item">
              <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Products</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/test-drive" className={({ isActive }) => isActive ? activeClassName : undefined}>Test drive</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/for-kids" className={({ isActive }) => isActive ? activeClassName : undefined}>For kids</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/games" className={({ isActive }) => isActive ? activeClassName : undefined}>Games</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/contacts-us" className={({ isActive }) => isActive ? activeClassName : undefined}>Contacts us</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/faq" className={({ isActive }) => isActive ? activeClassName : undefined}>Faq</NavLink>
            </li>
            {
              menuStatus
                ?
                <Social className="header__social header__social_center" />
                : null
            }
          </ul>
        </nav>
        <div className="header__menu-button" onClick={activeMenu}>
          <Burger className={menuStatus ? "header__burger _active" : "header__burger"} />
          <p className="header__burger-text">Menu</p>
        </div>
        {
          menuStatus
            ?
            null
            : <Social className="header__social header__social_center" />
        }
      </div>
    </header>
  )
}

export default Header;
