import React, { Component } from 'react';
import HomePanel from 'HomePanel';

class Main extends Component {

  // Set initial state
  constructor(props) {
		super(props);

	}

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
};

export default Main;
