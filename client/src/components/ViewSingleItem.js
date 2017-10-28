import React, { Component } from 'react';

class ViewSingleItem extends Component {
  render() {
    //console.log('viewItem in ViewSingleItem component ', this.props.viewItem);
    return (
      <article className='main'>
        <h1>This your single view</h1>
        <table className='tableSingleItem'>
          {this.props.viewItem.map((view) => {
            return(
              <tbody key={ view.id }>
                <tr className='listSingle'>
                  <td className='imgSearchedWraperSingle'>
                    <h3><a href={view.exhibit_url} target='_blank'>{ view.title }</a></h3>
                    <img width='100%' src={view.img_url} alt='one list item from all' />
                    <p className='comment'><i className="fa fa-quote-left" aria-hidden="true"></i>&nbsp;{ view.comment }&nbsp;<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                  </td>
                </tr>
                <tr className='lowerRowSingleItem'>
                  <td width='100%'>
                    <form
                      className='formSingleItem'
                      //onSubmit={this.props.handleUpdate}
                    >
                      <textarea
                        className='textareaSingle'
                        type='text'
                        value={this.props.inputAddComment}
                        placeholder='Enter your comment'
                        onChange={this.props.handleInputCommentOnChange}
                      ></textarea>
                      <button id='submit'
                              className='buttonSingleItem'
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
                </tr>
              </tbody>
            )})}
        </table>
      </article>
    )
  }
}

export default ViewSingleItem;
