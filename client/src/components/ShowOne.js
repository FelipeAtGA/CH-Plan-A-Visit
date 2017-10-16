import React, { Component } from 'react';

class ShowOne extends Component{
  render() {
    return(
      <tr className='listDB'>
        <td className='imgSearchedWraper'>
         <img width='100%' src={this.props.dbItem.img_url} alt='one list item from all' />
        </td>
        <td className='showAllTitles listDBcentercell'>
          <h3><a href={this.props.dbItem.exhibit_url} target='_blank'>{ this.props.dbItem.title }</a></h3>
        </td>
        <td>
          <button
            className='buttonListDBView'
            onClick={ (id) => {
              this.props.handleViewSingleItem(this.props.dbItem.id);
            }}
          >View</button>
        </td>
        <td>
          <button
            className='buttonListDBdelete'
            onClick={ (id) => {
              if(window.confirm("Are you sure you want to delete this?")){
              this.props.handleDeleteItem(this.props.dbItem.id);}
            }}
          >Delete</button>
        </td>
      </tr>
    )
  }
}

export default ShowOne;
