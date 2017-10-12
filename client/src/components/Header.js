import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className='nav-menu'>
              <li><Link to='/'><h2>Home</h2></Link></li>
              <li><Link to='/current'><h2>Current Exhibitions</h2></Link></li>
              <li><Link to='/search'><h2>Search the Collection</h2></Link></li>
              <li><Link to='/allItems'><h2>Your items</h2></Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
