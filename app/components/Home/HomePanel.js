import React, { Component } from 'react';

import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';

class HomePanel extends Component {
  render() {
    return(
      <div className="home-panel">
        <LeftPanel />
        <RightPanel />
      </div>
    )
  };
};

export default HomePanel;
