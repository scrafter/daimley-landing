import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const RodoStyled = styled.main`
  height: calc(100vh - 100px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.36;
  margin: 35px 0 25px;
`;

export const Content = styled.p`
  color: ${(props: DaimleyTheme) => props.theme.gray};
  font-size: 1.125rem;
  max-width: 75vw;
`;
