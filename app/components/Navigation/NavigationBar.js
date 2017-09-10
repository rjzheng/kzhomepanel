import React, { Component, PropTypes } from 'react';

class NavigationBar extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);


    this.state = {
      home: false,
      calendar: false,
      finance: false,
      grocery: false,
      task: false,
      scrapbook: false
    }
  }

  componentWillMount() {

    this.setState({
      home: this.props.home,
      calender: this.props.calendar,
      finance: this.props.finance,
      grocery: this.props.grocery,
      task: this.props.task,
      scrapbook: this.props.scrapbook
    });

  }

  render () {
    return (
      <div className="nav-panel">
        <ul>
          <li className={this.state.home==true ? 'active-border' : ''}><a
            className={this.state.home==true ? 'active-text' : ''}
            onClick={() => {
              this.context.router.push('/home');
            }}><i className="fa fa-home fa-lg" />Home</a></li>
          <li className={this.state.calendar==true ? 'active-border' : ''}><a
            className={this.state.calendar==true ? 'active-text' : ''}
            onClick={() => {
              this.context.router.push('/calendar');
          }}><i className="fa fa-calendar-check-o fa-lg" />Calendar</a></li>
          <li className={this.state.finance==true ? 'active-border' : ''}><a
            className={this.state.finance==true ? 'active-text' : ''}
            onClick={() => {
              this.context.router.push('/finance');
        }}><i className="fa fa-calculator fa-lg" />Finance</a></li>
          <li className={this.state.grocery==true ? 'active-border' : ''}><a
            className={this.state.grocery==true ? 'active-text' : ''}
            onClick={() => {
              this.context.router.push('/grocery');
        }}><i className="fa fa-shopping-cart fa-lg" />Food/Shopping</a></li>
          <li className={this.state.task==true ? 'active-border' : ''}><a
            className={this.state.task==true ? 'active-text' : ''}
            onClick={() => {
              this.context.router.push('/task');
            }}><i className="fa fa-list fa-lg" />Task Reminder</a></li>
          <li className={this.state.scrapbook==true ? 'active-border' : ''}><a
            className={this.state.scrapbook==true ? 'active-text' : ''}
            onClick={() => {
              this.context.router.push('/scrapbook');
        }}><i className="fa fa-window-maximize fa-lg" />Scrapbook</a></li>
        </ul>
      </div>
    )
  };
};

export default NavigationBar;
