import React, { Component } from 'react';
import ShowOne from './ShowOne';

class ShowAlldb extends Component {
  render() {
    console.log('ShowAlldb data ', this.props.dbItems)
    return(
      <article>
        <h1 className='title'>List of added artwork</h1>
        <table>
          <tbody>
          {this.props.dbItems.map((dbItem) => {
              return(
                <ShowOne
                  dbItem={dbItem}
                  handleDeleteItem={ this.props.handleDeleteItem }
                  handleViewSingleItem={ this.props.handleViewSingleItem}
                />
              )}
            )}
          </tbody>
        </table>
      </article>
    )
  }
}

export default ShowAlldb;
