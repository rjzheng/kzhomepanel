import React, { Component } from 'react';

import NavigationBar from 'NavigationBar';
import TaskPanel from 'TaskPanel';

class TaskPage extends Component {
  render (){
    return (
      <div>
        <NavigationBar home={false} calendar={false} finance={false}
          grocery={false} task={true} scrapbook={false}/>
        <TaskPanel />
      </div>
    )
  };
};

export default TaskPage;
