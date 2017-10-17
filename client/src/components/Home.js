import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <article className='homePanelsWrapper'>
       <div className='homePageWrapper'>
       <Link to='/current'>
           <div id="column1" className='homePageDivs'>
             <h2>Current Exhibitions</h2>
           </div>
         </Link>
         <Link to='/search'>
           <div id="column2" className='homePageDivs'>
             <h2>Search the Collection</h2>
           </div>
           </Link>
         <Link to='/allItems'>
           <div id="column3" className='homePageDivs'>
             <h2>Your Saved Collection</h2>
           </div>
         </Link>
         <Link to='/about'>
           <div id="column4" className='homePageDivs'>
             <h2>About the Museum</h2>
           </div>
         </Link>
       </div>
      </article>
    )
  }
}
export default Home;
