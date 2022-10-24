import Link from 'next/link';
import React from 'react';

const Header = ({ handleModal }) => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <Link href="/">
          <a className='header__logo'>
            Migonest
          </a>
        </Link>
        <ul className='header__list'>
          <li>
            <a onClick={handleModal}>Log in</a>
          </li>
          <li>
            <a className='cmn-button' onClick={handleModal}>Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
