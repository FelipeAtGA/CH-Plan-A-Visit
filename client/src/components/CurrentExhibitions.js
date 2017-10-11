import React, { Component } from 'react';

class CurrentExhibitons extends Component {
  render(){
    return(
      <article>
        <h1>Current Exhibitions</h1>
        <table>
          <tbody>
            {this.props.exhibits.map((exhibit) => {
              if( exhibit.is_active === '1'){
                return(
                  <tr>
                    <td>
                      <h3>{ exhibit.title }</h3>
                    </td>
                    <td>
                      <a href={ exhibit.url } target='_black'>view details</a>
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
