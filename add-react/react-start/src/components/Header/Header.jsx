import React from 'react';
import c from'./Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
          <img className={c.headerLogo} src='https://cdn130.picsart.com/263046205020212.png?r1024x1024' alt='Logo' />
          <h1 className={c.headerName}>
              Travel blog
          </h1>
        </header >
    )
}

export default Header;