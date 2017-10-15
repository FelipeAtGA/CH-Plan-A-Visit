import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <article>
       <h1>Welcome Home</h1>
       <div className='homePageWrapper'>
       <div id="column1" className='homePageDivs'>
         <h2>Current</h2>
         <h2>Exhibitions</h2>
       </div>
       <div id="column2" className='homePageDivs'>
         <h2>Search the</h2>
         <h2>Collection</h2>
       </div>
       <div id="column3" className='homePageDivs'>
         <h2>Your Saved</h2>
         <h2>Collection</h2>
       </div>
       <div id="column4" className='homePageDivs'>
         <h2>About the</h2>
         <h2>Museum</h2>
       </div>
       </div>
      </article>
    )
  }
}
export default Home;
