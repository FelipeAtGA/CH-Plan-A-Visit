import React, { Component } from 'react';

class ShowOne extends Component{
  render() {
    return(
      <tr>
        <td className='imgSearchedWraper'>
         <img width='100%' src={this.props.dbItem.img_url} alt='one list item from all' />
        </td>
        <td className='showAllTitles'>
          <h3><a href={this.props.dbItem.exhibit_url} target='_blank'>{ this.props.dbItem.title }</a></h3>
        </td>
        <td>
          <button
            onClick={ (id) => {
              this.props.handleViewSingleItem(this.props.dbItem.id);
            }}
          >View</button>
        </td>
        <td>
          <button
            onClick={ (id) => {
              this.props.handleDeleteItem(this.props.dbItem.id);
            }}
          >Delete</button>
        </td>
      </tr>
    )
  }
}

export default ShowOne;
