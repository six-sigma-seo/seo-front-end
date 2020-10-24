import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={501}
      height={1024}
      viewBox='0 0 501 1024'
      fill='none'
      {...props}
    >
      <path
        d='M-1122.73 143.933C-894.83-518.37-423.799-581.262 43.6-59.61c274.648 306.528 401.022 211.103 267.107 600.279C82.809 1202.97-291.736 1278.74-759.135 757.087c-274.645-306.529-497.505-223.978-363.595-613.154z'
        fill='url(#prefix__paint0_linear)'
      />
      <defs>
        <linearGradient
          id='prefix__paint0_linear'
          x1={-1289}
          y1={-268.706}
          x2={607.707}
          y2={-74.21}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3A13B8' />
          <stop offset={1} stopColor='#A255FF' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
