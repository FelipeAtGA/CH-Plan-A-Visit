import React, { Component } from 'react';

class ShowAlldb extends Component {
  render() {
    console.log('ShowAlldb data ', this.props.dbItems)
    return(
      <section>
        <h1>List of your items</h1>
      </section>

    )
  }
}

export default ShowAlldb;