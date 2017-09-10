import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavigationBar from 'NavigationBar';
import HomePanel from 'HomePanel';

class HomePage extends Component {

  render () {
    return (
      <div>
        <NavigationBar home={true} calendar={false} finance={false}
          grocery={false} task={false} scrapbook={false}/>
        <HomePanel />
      </div>
    )
  };
};

export default HomePage;
