import React, { Component } from 'react';
import axios from 'axios';
import ShowOne from './ShowOne';

class ShowAlldb extends Component {
  render() {
    console.log('ShowAlldb data ', this.props.dbItems)
    return(
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
    )
  }
}

export default ShowAlldb;
