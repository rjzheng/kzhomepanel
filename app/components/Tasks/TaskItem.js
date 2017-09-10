import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class TaskItem extends Component {
  render() {
    var { id, task, completed, createdAt, remind, remindAt } = this.props;

    return(
      <div>
        
      </div>
    )
  };
};

export default TaskItem;
