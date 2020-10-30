import React from 'react';
import { StyledIcon } from './styles';

const Icon = ({ iconName, ...props }) => {
  const svg = require(`../../icons/${iconName}.svg`);

  return (
    <StyledIcon
      {...props}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></StyledIcon>
  );
};
export default Icon;
