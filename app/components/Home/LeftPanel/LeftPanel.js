import React from 'react';
import WeatherWidget from 'WeatherWidget';
import CalendarWidget from 'CalendarWidget';
import TaskWidget from 'TaskWidget';
import GroceryWidget from 'GroceryWidget';

function LeftPanel() {
  return (
    <div className="left-panel">
      <WeatherWidget />
      <CalendarWidget />
      <div>
        <TaskWidget />
        <GroceryWidget />
      </div>
    </div>
  )
};

export default LeftPanel;
