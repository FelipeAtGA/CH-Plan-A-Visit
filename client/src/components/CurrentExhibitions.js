import React, { Component } from 'react';

class CurrentExhibitons extends Component {
  render(){
    return(
      <div>
        <h1>Current Exhibitions</h1>
        {this.props.exhibits.map((exhibit) => {
          if( exhibit.is_active === '1'){
            return(
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h3>{ exhibit.title }</h3>
                    </td>
                    <td>
                      <a href={ exhibit.url } target='_black'>view details</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          }
        })}
      </div>

    )
  }
}

export default CurrentExhibitons;
