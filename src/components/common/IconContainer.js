import React from 'react';
import { IconContext } from 'react-icons';

function IconContainer(props) {
  return (
    <IconContext.Provider value={{ color: props.color }}>
      {props.icon}
    </IconContext.Provider>
  );
}

export default IconContainer;
