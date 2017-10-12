import React, { Component } from 'react';
import axios from 'axios';

class ShowAlldb extends Component {
  constructor(props){
    super(props);
    this.state = {
      dbItems: [],

    }
  }

  componentDidMount() {
    axios('http://localhost:3001/api/planner')
    .then((res) => {
      this.setState((prevState) => {
        console.log('didMount all ', res.data.data.items)
        return{
          dbItems: res.data.data.items,
        }
      })
    })
  }

  render() {
    console.log('ShowAlldb data ', this.state.dbItems)
    return(
      <section>
        <h1>List of your items</h1>
        <table>
          <tbody>
          {this.state.dbItems.map((dbItem) => {
              return(
                <tr>
                  <td className='imgSearchedWraper'>
                   <img width='100%' src={dbItem.img_url} alt='one list item from all' />
                  </td>
                  <td className='showAllTitles'>
                    <h3><a href={dbItem.exhibit_url} target='_blank'>{ dbItem.title }</a></h3>
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
