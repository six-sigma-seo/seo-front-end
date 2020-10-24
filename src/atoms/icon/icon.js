import React from 'react';
import { StyledIcon } from './styles';
import iconName from '../../icons/search.svg';

const Icon = (props) => {
  // const icon = require(`../../icons/${iconName}.svg`);

  return <StyledIcon {...props} src={iconName} />;
};
export default Icon;
