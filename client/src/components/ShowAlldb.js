import React, { Component } from 'react';
import ShowOne from './ShowOne';

class ShowAlldb extends Component {
  render() {
    //console.log('ShowAlldb data ', this.props.dbItems)
    return(
      <article className='main'>
        <h1 className='title'>List of added artwork</h1>
        <table>
          <tbody>
          {this.props.dbItems.map((dbItem,i) => {
              return(
                <ShowOne
                  dbItem={dbItem}
                  key={dbItem.id.toString()}
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
