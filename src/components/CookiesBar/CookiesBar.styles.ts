import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const CookiesBarStyled = styled.div`
  width: 100vw;
  padding: 15px 30px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${(props: DaimleyTheme) => props.theme.greenSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.p`
  font-size: 0.8rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
`;

export const CloseButton = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
`;
