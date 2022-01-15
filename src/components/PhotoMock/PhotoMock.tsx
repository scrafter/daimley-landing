import React from 'react';
import { StyledPhotoMock } from './PhotoMock.styles';

interface Props {
  width: number;
  height: number;
}

function PhotoMock({ width, height }: Props) {
  return <StyledPhotoMock width={width} height={height} />;
}

export default PhotoMock;
