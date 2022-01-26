import React from 'react';
import { theme } from '@/theme';

interface Props {
  active: boolean;
  onClick?: () => void;
}

function IconRight({ active, onClick }: Props) {
  const fillColor = active ? theme.orange : `#fff`;

  return (
    <svg
      onClick={onClick}
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 10.3 18"
      xmlSpace="preserve"
      height={35}
      width={20}
      fill={fillColor}
      style={{ cursor: active ? `pointer` : `default` }}
    >
      <path
        d="M1.4,0c0.4,0.1,0.7,0.3,0.9,0.6c2.5,2.5,5,5,7.4,7.4c0.4,0.4,0.6,0.8,0.4,1.4C10.1,9.6,10,9.8,9.8,9.9
	c-2.5,2.6-5.1,5.1-7.7,7.7c-0.4,0.4-0.9,0.5-1.4,0.3c-0.5-0.2-0.8-0.6-0.8-1.1c0-0.4,0.1-0.8,0.4-1.1C1,15.2,1.6,14.6,2.2,14
	c1.6-1.6,3.2-3.2,4.9-4.9c0,0,0.1-0.1,0.2-0.2C7.2,8.9,7.1,8.9,7.1,8.8C4.9,6.6,2.6,4.4,0.4,2.2C0.1,1.8-0.1,1.4,0.1,0.9
	c0.1-0.4,0.4-0.7,0.8-0.8C1,0,1,0,1.1,0C1.2,0,1.3,0,1.4,0z"
      />
    </svg>
  );
}

export default IconRight;
