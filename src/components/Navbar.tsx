'use client';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'react-feather';

const Styledheader = styled.div`
  .header {
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    border-bottom: 1px solid #f8fafc;
    z-index: 99;
    background: #1a1a1a;
    display: block;
  }

  .navbar {
    transition: all 0.3s ease-in-out;
  }
  .fixed-top {
    transition: all 0.3s ease-in-out;
  }

  .header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header .logo h1 {
    color: #f8fafc;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .header .logo img {
    vertical-align: middle;
  }
  .header .menu .head {
    display: none;
  }

  .header .menu ul {
    list-style: none;
    margin-top: 20px;
  }

  .header .menu ul li {
    display: inline-block;
  }
  .header .menu ul li a:hover {
    opacity: 0.5;
  }
  .header .menu .a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    color: #f8fafc;
    font-weight: 600;
    line-height: 1.5;
  }

  .header .menu ul li:not(:last-child) {
    margin-right: 30px;
  }

  .header .menu .dropdown {
    position: relative;
  }

  .header .menu > ul > li > .a {
    padding: 24px 0;
  }

  .header .menu li:hover > .submenu,
  .header .menu .dropdown.active > .submenu {
    opacity: 1;
    transform: none;
    visibility: visible;
    transition: all 0.5s ease;
  }
  .header .menu > ul > .dropdown > .a {
    padding-right: 30px;
    position: relative;
  }

  .header .menu i {
    font-size: 10px;
    pointer-events: none;
    user-select: none;
    position: absolute;
    color: #f8fafc;
    top: calc(50% - 12px);
  }

  .header .menu > ul > li > i {
    right: 5px;
  }

  .header .menu .submenu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    padding: 15px 0;
    background-color: #2f7f6c;
    z-index: 9999;
    transform-origin: top;
    transform: scaleY(0);
    visibility: hidden;
    opacity: 0;
    border: 1px solid #2f7f6c;
  }

  .header .menu .submenu .a {
    padding: 6px 24px;
    display: inline-block;
    margin-top: 2px;
  }

  .header .menu .submenu .dropdown > .a {
    padding-right: 34px;
  }

  .header .menu .submenu span {
    background-image: linear-gradient(hsl(45, 100%, 85%), #2f7f6c);
    background-repeat: no-repeat;
    background-size: 0 1px;
    background-position: 0 100%;
    transition: background-size 0.5s ease;
  }

  .header .menu .submenu li:hover > .a > span {
    background-size: 100% 2px;
  }
  .header .menu .submenu li:hover > .a {
    color: #f8fafc;
  }

  .header__right {
    display: flex;
  }

  .header__right > * {
    margin-left: 25px;
  }

  .header__right .open_menu_btn {
    display: none;
  }

  .header ul .daftar {
    display: none;
  }

  .header__right .daftar {
    display: block;
  }

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 15pt;
  }

  .daftar {
    /* color: var(--color-normal); */
    color: #f8fafc;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 700;
    /* border: 3px solid var(--button-secondary-color); */
    background-color: #2f7f6c;
    padding: 0.5rem 2rem;
  }

  @media (max-width: 991px) {
    .header {
      padding: 12px 0;
    }
    .header__right > * {
      margin-right: 30px;
    }

    .header .menu {
      position: fixed;
      right: 0;
      top: 0;
      width: 320px;
      height: 100%;
      background: #2f7f6c;
      padding: 20px;
      overflow-y: auto;
      z-index: 5;
      transform: translateX(100%);
    }

    .header .menu.open {
      transform: none;
    }

    .header .menu .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
    .header .menu ul li.menu-item {
      margin-top: 30px;
    }
    .header .menu ul {
      padding: 0px;
    }

    .header .menu .close_menu_btn {
      height: 35px;
      width: 35px;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .header .menu .close_menu_btn::before,
    .header .menu .close_menu_btn::after {
      content: '';
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: #f8fafc;
    }

    .header .menu .close_menu_btn::before {
      transform: rotate(45deg);
    }
    .header .menu .close_menu_btn::after {
      transform: rotate(-45deg);
    }

    .header .menu > ul > li {
      display: block;
    }
    .header .menu > ul > li:not(:last-child) {
      margin-right: 0;
    }
    .header .menu li {
      border-bottom: 1px solid #2f7f6c;
    }
    .header .menu .submenu .submenu-tentang,
    .menu .submenu .submenu-pendidikan {
      border-bottom: 1px solid #2f7f6c;
      width: 100%;
    }

    .header .menu > ul > li > .a {
      padding: 12px 0;
    }

    .header .menu > ul > .dropdown > .a {
      padding-right: 50%;
    }

    .header .menu i {
      height: 24px;
      width: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      cursor: pointer;
      top: 1px;
    }
    .header .menu .submenu li:hover > .a > span {
      background-size: 1% 0px;
    }

    .header .menu .dropdown.active > i {
      transform: rotate(180deg);
    }

    .header .menu .submenu {
      position: static;
      transform: none;
      visibility: visible;
      padding: 0;
      transition: none;
      width: 100%;
      display: none;
      /* background-color: #16a34a; */
      background: none;
    }
    .header .menu .submenu .a {
      margin: 10px 0 10px 0;
    }

    .header .menu .dropdown.active > .submenu {
      display: block;
    }

    .header .menu .submenu i {
      transform: none;
      right: 0;
    }
    .header__right .open_menu_btn {
      display: block;
    }
    .header__right .open_menu_btn .line {
      height: 2px;
      width: 30px;
      background-color: #f8fafc;
      position: absolute;
    }
    .header__right .open_menu_btn .line1 {
      transform: translateY(-8px);
    }
    .header__right .open_menu_btn .line3 {
      transform: translateY(8px);
    }

    .header ul .daftar {
      display: block;
    }

    img {
      width: 80%;
    }

    .header__right .daftar {
      display: none;
    }
  }
`;

const NavbarComponent = () => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.pageYOffset > header.offsetTop) {
        header.classList.add('fixed-top');
        header.classList.remove('navbar');
      } else {
        header.classList.remove('fixed-top');
        header.classList.add('navbar');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current.style.transition = 'transform 0.5s ease';
      menuRef.current.classList.add('open');
    } else {
      menuRef.current.style.transition = 'transform 0.5s ease';
      menuRef.current.classList.remove('open');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownClick = (index) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <Styledheader>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link href="/" className="a" onClick={() => setIsMenuOpen(false)}>
              {/* <img src={LogoWebsite} alt="Logo yayasan" /> */}
              <h1>logo</h1>
            </Link>
          </div>
          <nav className="menu" ref={menuRef}>
            <div className="head">
              <div className="logo">
                <Link href="/" className="a" onClick={() => setIsMenuOpen(false)}>
                  {/* <img src={LogoYayasan} alt="Logo yayasan" /> */}
                  <h1>logo</h1>
                </Link>
              </div>
              <button type="button" className="close_menu_btn" aria-label="Close menu" onClick={toggleMenu}></button>
            </div>
            <ul>
              <li className={`menu-item dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
                <Link href="#" className="a" onClick={() => handleDropdownClick(0)}>
                  Peta tematik
                </Link>
                <i onClick={() => handleDropdownClick(0)}>
                  {' '}
                  <ChevronDown />
                </i>
                <ul className="submenu">
                  <li className="submenu-tentang">
                    <Link href="/peta-tematik/masjid" className="a" onClick={() => setIsMenuOpen(false)}>
                      <span>Masjid</span>
                    </Link>
                  </li>
                  <li className="submenu-tentang">
                    <Link href="/peta-tematik/universitas" className="a" onClick={() => setIsMenuOpen(false)}>
                      <span>Universitas</span>
                    </Link>
                  </li>
                  <li className="submenu-tentang">
                    <Link href="/peta-tematik/turis" className="a" onClick={() => setIsMenuOpen(false)}>
                      <span>Turis</span>
                    </Link>
                  </li>
                  <li className="submenu-tentang">
                    <Link href="/peta-tematik/wisata" className="a" onClick={() => setIsMenuOpen(false)}>
                      <span>Wisata</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link className="a" onClick={() => setIsMenuOpen(false)} href="/berita">
                  Kota/Kabupaten
                </Link>
              </li>

              <li className="menu-item">
                <Link className="a" onClick={() => setIsMenuOpen(false)} href="/kecamatan">
                  Kecamatan
                </Link>
              </li>
              <li className="menu-item">
                <Link className="a" onClick={() => setIsMenuOpen(false)} href="/tentang">
                  Tentang
                </Link>
              </li>
              <div className="mt-3">
                <Link target="_blank" aria-current="page" href="/" className="daftar">
                  Hubungi Kami
                </Link>
              </div>
            </ul>
          </nav>
          <div className="header__right">
            <Link aria-current="page" target="_blank" href="/" className="daftar">
              Hubungi Kami
            </Link>
            <span type="button" className="open_menu_btn" aria-label="Open menu" onClick={toggleMenu}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </span>
          </div>
        </div>
      </header>
    </Styledheader>
  );
};

export default NavbarComponent;
