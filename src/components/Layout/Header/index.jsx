import React, {useEffect, useState} from 'react';
import s from './index.module.css';
import logo from './media/logo.png';

export default function Header() {
  const count = 1;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header> 
      <div className={s.container}>
        <div className={s.header_body}>
          <a href="home.html">
            <img src={logo} alt="logo"/>
          </a>
          {!isMobile && (
            <a href="home.html" className={s.catalog_btn}>
              Catalog
            </a> 
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
            <li><a href="home.html">Главная</a></li>
            <li><a href="about.html">О нас</a></li>
            <li><a href="services.html">Услуги</a></li>
            {isMobile && isMenuOpen && (
              <li>
                <a href="home.html" className={s.catalog_btn_bm}>Catalog</a>
              </li>
            )}
          </ul>
        </nav>
        <div className={s.cart_wrapper}>
          <a href="cart.html" className={s.cart_icon}>🛒</a>
          <span className={s.cart_count}>{count}</span>
        </div>
      </div>
    </header>
  )
}
