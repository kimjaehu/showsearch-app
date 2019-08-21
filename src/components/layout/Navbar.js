import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-light bg-none mb-5'>
        <div className='container'>
          <div className='navbar-header'>
            <Link className='navbar-brand text-black text-lg brand-text' to='/'>
              showSearch
            </Link>
          </div>
          <ul className='navbar-nav ml-auto text-light d-inline-block'>
            <li className='nav-item d-inline-block mr-4'>
              <a
                href='http://www.omdbapi.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-imdb fa-3x' id='imdb-logo' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
