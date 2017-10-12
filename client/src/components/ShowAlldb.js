import React, { Component } from 'react';
import axios from 'axios';

class ShowAlldb extends Component {
  render() {
    console.log('ShowAlldb data ', this.props.dbItems)
    return(
      <section>
        <h1>List of your items</h1>
        <table>
          <tbody>
          {this.props.dbItems.map((dbItem) => {
              return(
                <tr>
                  <td className='imgSearchedWraper'>
                   <img width='100%' src={dbItem.img_url} alt='one list item from all' />
                  </td>
                  <td className='showAllTitles'>
                    <h3><a href={dbItem.exhibit_url} target='_blank'>{ dbItem.title }</a></h3>
                  </td>
                  <td>
                    <button
                      onClick={ (id) => {
                        this.props.handleDeleteItem(dbItem.id);
                      }}
                    >Delete</button>
                  </td>
                </tr>
              )}
            )}
          </tbody>
        </table>
      </section>
    )
  }
}

export default ShowAlldb;
