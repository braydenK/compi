import React from 'react';
import ListLayout from './ListLayout';
import GuideLayout from './GuideLayout';

function ContentContainer(props) {
  return (
    <div>
      {props.displayId === 1 ? <ListLayout /> : <GuideLayout />}
    </div>
  )
}

export default ContentContainer;
