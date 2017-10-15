import React, { Component } from 'react';

class CurrentExhibitons extends Component {
  render(){
    return(
      <article>
        <h1 className='title'>Current Exhibitions</h1>
        <table>
          <tbody>
            {this.props.exhibits.map((exhibit, i) => {
              if( exhibit.is_active === '1' ){
                return(
                  <tr className={'rowColor' + i}>
                    <td
                      key={ parseInt(exhibit.id, 10) }
                      className='currentExhibitTableCell'
                    >
                      <a href={ exhibit.url } target='_black'>
                       <h3>{ exhibit.title }</h3>
                      </a>
                    </td>
                    <td className='currentExhibitTableCell' >
                      <a className='linkCurrentExhibitTableCell' href={ exhibit.url } target='_black'>view details</a>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </article>
    )
  }
}

export default CurrentExhibitons;
