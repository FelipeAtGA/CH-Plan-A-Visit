import React, { Component } from 'react';

class ViewSingleItem extends Component {
  render() {
    return (
      <article>
        <h1>This your single view</h1>
        <table>
          <tbody>
          {this.props.item.map((single) => { return(
            <tr>
              <td className='imgSearchedWraper'>
               <img width='100%' src={single.img_url} alt='one list item from all' />
              </td>
              <td className='showAllTitles'>
                <h3><a href={single.exhibit_url} target='_blank'>{ single.title }</a></h3>
              </td>
              <td>
                <textarea
                  placeholder='Enter your comments'
                >{single.comment}</textarea>
              </td>
            </tr>
            )})}
          </tbody>
        </table>
      </article>
    )
  }
}

export default ViewSingleItem;
