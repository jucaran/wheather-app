import React from 'react';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import { Link } from 'react-router-dom'

function Nav({onSearch}) {
  return (
    <header className={s.box}>
      <div className={s.logo}> Mi app del clima </div>
      <SearchBar onSearch={onSearch} />
      <nav>
        <Link className={s.link} to="/clima-app">Home</Link>
        <Link className={s.link} to="/clima-app/about">About</Link>
      </nav>
    </header>
  );
};

export default Nav;
