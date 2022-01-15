import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

interface Props extends DaimleyTheme {
  width: number;
  height: number;
}

export const StyledPhotoMock = styled.div`
  background-color: ${(props: Props) => props.theme.gray};
  width: ${(props: Props) => props.width}px;
  height: ${(props: Props) => props.height}px;
`;