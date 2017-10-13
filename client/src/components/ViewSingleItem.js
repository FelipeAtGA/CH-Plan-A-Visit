import React, { Component } from 'react';

class ViewSingleItem extends Component {
  render() {
    console.log('viewItem in ViewSingleItem component ', this.props.viewItem);
    return (
      <article>
        <h1>This your single view</h1>
        <table>
          <tbody>
          {this.props.viewItem.map((view) => {
            return(
            <tr>
              <td className='imgSearchedWraper'>
               <img width='100%' src={view.img_url} alt='one list item from all' />
              </td>
              <td className='showAllTitles'>
                <h3><a href={view.exhibit_url} target='_blank'>{ view.title }</a></h3>
              </td>
              <td>
                <textarea
                  placeholder='Enter your comments'
                >{view.comment}</textarea>
              </td>
            </tr>)})}
          </tbody>
        </table>
      </article>
    )
  }
}

export default ViewSingleItem;
