import React, { Component } from 'react';

class NavigationBar extends Component {
  render () {
    return (
      <div className="nav-panel">
        <ul>
          <li><a href=""><i className="fa fa-home fa-lg" />Home</a></li>
          <li><a href=""><i className="fa fa-calendar-check-o fa-lg" />Calendar</a></li>
          <li><a href=""><i className="fa fa-calculator fa-lg" />Finance</a></li>
          <li><a href=""><i className="fa fa-shopping-cart fa-lg" />Food/Shopping</a></li>
          <li><a href=""><i className="fa fa-list fa-lg" />Task Reminder</a></li>
          <li><a href=""><i className="fa fa-window-maximize fa-lg" />Scrapbook</a></li>
        </ul>
      </div>
    )
  };
};

export default NavigationBar;
