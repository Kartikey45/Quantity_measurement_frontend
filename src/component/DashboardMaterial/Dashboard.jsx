import React from 'react';
import './Dashboard.scss';
import Toolbar from '../ToolbarMaterial/Toolbar'

export default class Dashboard extends React.Component {
  render() {
    return(
        <div className='parent' >
                    <Toolbar/>
        </div>
    )
  }
}
