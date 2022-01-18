import React, { SVGAttributes } from 'react';
import styled from '@emotion/styled';

const Root = styled.svg`
  height: 20px;
  width: 20px;
  fill: white;
  background-color: #419d3e;
  border-radius: 50%;
  padding: 4px;
`;

export function CheckIcon(props: SVGAttributes<SVGElement>) {
  return (
    <Root
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 11.1 8"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M11.1,1c-0.1,0.3-0.2,0.5-0.4,0.7c-2,2-4,4-6,6C4.4,8,4.1,8.1,3.7,7.9c-0.1,0-0.3-0.1-0.4-0.2c-1-1-2-2-3.1-3.1
	c-0.4-0.4-0.4-1,0.1-1.4C0.7,3,1.2,3.1,1.5,3.4C2.3,4.2,3.1,5,3.9,5.8c0,0,0.1,0.1,0.1,0.1c0-0.1,0.1-0.1,0.1-0.1
	C5.9,4,7.7,2.1,9.6,0.3C9.8,0,10.1-0.1,10.5,0c0.3,0.1,0.5,0.3,0.6,0.6c0,0,0,0,0,0.1C11.1,0.8,11.1,0.9,11.1,1z"
      />
    </Root>
  );
}
