import React from 'react';
import ListLayout from '../common/layouts/ListLayout';

const ResourcesList = () => {
  const state = {
    title: 'Resources',
    resources: [
      {
        id: 0,
        category: 'books',
        items: [
          {
            id: 10,
            name: 'Cracking the Coding Interview',
            link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850'
          }
        ]
      }
    ]
  }

  return (
    <ListLayout
      title={state.title}
      items={state.resources}
    />
  )
}

export default ResourcesList;
