import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const HeaderTileWrapper = styled.div`
  border-radius: 6px;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
  &:first-of-type {
    margin-left: 100px;
    background-color: ${(props: DaimleyTheme) => props.theme.greenBg};
  }
`;

export const HeaderTileTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 50px;
`;

export const HeaderTileLink = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-bottom: 25px;
`;
