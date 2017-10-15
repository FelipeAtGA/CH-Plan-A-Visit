import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../cooperHewitt.png';

class Header extends Component {
  render() {
    return (
        <header className="App App-header">
          <nav className='clearfix'>
            <div className='App-logo'>
              <Link to='/'>
                <img width='90%' src={logo} alt='cooper hewitt museum logl' />
              </Link>
            </div>
            <ul className='nav-menu'>
              <li><Link to='/current'><h2>Current Exhibitions</h2></Link></li>
              <li><Link to='/search'><h2>Search the Collection</h2></Link></li>
              <li><Link to='/allItems'><h2>Saved Items</h2></Link></li>
              <li><Link to='/'><h2>Home</h2></Link></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
