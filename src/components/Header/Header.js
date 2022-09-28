import React from 'react';
import './Header.css'
const Header = () => {
    return (
        
        <nav className='navbar'>
        <div className='container'>
          <a className='navbar-brand' href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Book-icon-bible.png/800px-Book-icon-bible.png" alt="Logo" width="60" height="40" className='d-inline-block align-text-top'/>
            <span className='fs-4'>Read Book</span>
           
          </a>
        </div>
      </nav>
        
    );
};

export default Header;