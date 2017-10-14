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
        <form
          //onSubmit={this.props.handleUpdate}
        >
          <textarea
            type='text'
            value={this.props.inputAddComment}
            placeholder='Enter your comment'
            onChange={this.props.handleInputSearchOnChangeComment}
          >{ view.comment }</textarea>
          <button id='submit'
                  type='button'
                  onClick={(id, comment) => {
                    this.props.handleUpdate(
                      view.id,
                      //this.props.inputAddComment,
                      )}
                  }
          >Add comment</button>
        </form>
              </td>
            </tr>)})}
          </tbody>
        </table>
      </article>
    )
  }
}

export default ViewSingleItem;
