import React from 'react';

import PhotoWidget from 'PhotoWidget';
import NewsWidget from 'NewsWidget';


function RightPanel() {
  return (
    <div className="right-panel">
      <PhotoWidget />
      <NewsWidget />
    </div>
  )
};

export default RightPanel;
