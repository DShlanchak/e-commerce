import React, {useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import s from './index.module.css';
import logo from '../../assets/logo.png';

export default function Header() {
  const count = 1;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setClass = ({isActive}) => [s.link, isActive? s.active : ''].join(' ');

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header> 
      <div className={s.container}>
        <div className={s.header_body}>
          <Link to={'/'}>
            <img src={logo} alt="logo"/>
          </Link>
          {!isMobile && (
            <Link to={'/categories'} className={s.catalog_btn}>
              Catalog
            </Link> 
          )}
        </div>

        {isMobile && (
        <div className={`${s.burger} ${isMenuOpen ? s.open : ''}`} onClick={toggleMenu}>
          <div className={s.burger_line}></div>
          <div className={s.burger_line}></div>
          <div className={s.burger_line}></div>
        </div>
        )}

        <nav className={s.nav}>
          <ul className={`${s.nav_list} ${isMenuOpen ? s.menu_burger : ""}`}>
            <li><NavLink className={setClass} to={'/'} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink className={setClass} to={'/products'} onClick={closeMenu}>Products</NavLink></li>
            <li><NavLink className={setClass} to={'/sale'} onClick={closeMenu}>Sale</NavLink></li>
            {isMobile && isMenuOpen && (
              <li>
                <Link to={'/categories'} className={s.catalog_btn_bm} onClick={closeMenu}>Catalog</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className={s.cart_wrapper}>
          <Link to={'/cart'} className={s.cart_icon}>🛒</Link>
          <span className={s.cart_count}>{count}</span>
        </div>
      </div>
    </header>
  )
}
