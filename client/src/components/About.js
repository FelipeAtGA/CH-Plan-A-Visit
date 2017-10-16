import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <article>
      <h1 className='title'>About Hewitt Cooper</h1>
      <div className='aboutPageWrapper'>
        <div id="column1About" className='aboutPageDivs'>
          <h2>WHAT'S IN<br/>THE MUSEUM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <p className='aboutPadding aboutFontsize'>
            Cooper Hewitt, Smithsonian Design Museum is the
            only museum in the nation devoted exclusively to
            historic and contemporary design. After a three-year
            renovation, the museum re-opened in December 2014 with
            exhibitions featuring a rich mix of historic and
            contemporary design objects from our permanent
            collection, unique temporary installations, and
            dynamic interactive experiences. We also have an
            exciting calendar of events, including hands-on
            workshops, talks, and family programs.
          </p>
        </div>
        <div id="column2About" className='aboutPageDivs'>
          <h2>MUSEUM HOURS</h2>
          <h3 className='aboutPadding hoursOfOp'>Weekdays and Sundays,<br />from 10:00 a.m.<br />to 6:00 p.m.</h3>
          <h3 className='aboutPadding hoursOfOp'>Saturdays,<br />from 10:00 a.m.<br />to 9:00 p.m.</h3>
        </div>
        <div id="column3About" className='aboutPageDivs'>
          <h2>ADMISSION PRICES</h2>
          <table className='aboutMargin'>
            <tbody>
             <tr>
               <th></th>
               <th className='aboutTableHeaderAlign'>Buy<br />Online</th>
               <th className='aboutTableHeaderAlign'>Buy at<br />the Door</th>
             </tr>
              <tr>
                <td>Adults<br />&nbsp;</td><td>$16</td><td>$18</td>
              </tr>
              <tr>
                <td>Seniors<br />(62+)<br />&nbsp;</td><td>$10</td><td>$12</td>
              </tr>
              <tr>
                <td>Students<br />&nbsp;</td><td>$7</td><td>$9</td>
              </tr>
              <tr>
                <td>18 and<br />under<br />&nbsp;</td><td>Free</td><td>Free</td>
              </tr>
              <tr>
                <td>Members</td><td>Free</td><td>Free</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="column4About" className='aboutPageDivs'>
          <h2>DAILY PUBLIC TOURS</h2>
          <p className='aboutPadding aboutFontsize'>
            Free tours of the museum’s exhibitions from an
            experienced team of guides take place every day and
            encourage an informal exchange of ideas among the
            general public. Tours take place at 11:30 a.m.
            and 1:30 p.m. on weekdays and 1 p.m. and 3 p.m. on
            weekends. For more information, please call our tour
            line at 212.849.8351. Baby-changing facilities are
            available in all of our ground-floor restrooms.
          </p>
        </div>
      </div>
      </article>
    )
  }
}

export default About;
