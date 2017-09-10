import React, { Component } from 'react';

import NavigationBar from 'NavigationBar';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';

class HomePanel extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <div className="home-panel">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    )
  };
};

export default HomePanel;
