import React, { SVGAttributes } from 'react';
import styled from '@emotion/styled';

const Root = styled.svg`
  height: 20px;
  width: 28px;
  fill: #ff9e48;
`;

export function MailIcon(props: SVGAttributes<SVGElement>) {
  return (
    <Root
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 20 14.7"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          d="M19.8,4.3c-3,1.8-6,3.7-9.1,5.5c-0.5,0.3-0.9,0.3-1.4,0C7.5,8.7,5.6,7.6,3.8,6.5C2.5,5.7,1.3,4.9,0,4.2c0,2.7,0,5.3,0,8
		c0,0,0,0.1,0,0.1c0.2,1.2,1.1,2.2,2.4,2.4c0.6,0.1,1.1,0.1,1.7,0.1c4.3,0,8.5,0,12.8,0c1.8,0,3.1-1.3,3.1-3.1c0-2.4,0-4.9,0-7.3
		c0-0.1,0-0.1,0-0.2C19.9,4.2,19.8,4.3,19.8,4.3z"
        />
        <path
          d="M9.9,8.3c0.1,0.1,0.2,0.1,0.3,0c0.7-0.4,1.4-0.9,2.1-1.3c2.5-1.5,5-3,7.5-4.6c0.1-0.1,0.2-0.2,0.1-0.3
		c-0.1-0.3-0.2-0.5-0.4-0.8C18.9,0.4,18,0,16.9,0c-2.3,0-4.6,0-6.9,0C7.7,0,5.4,0,3.1,0C1.7,0,0.5,0.8,0.1,2.1c0,0.1,0,0.2,0.1,0.3
		C3.5,4.4,6.7,6.3,9.9,8.3z"
        />
      </g>
    </Root>
  );
}

export default MailIcon;
