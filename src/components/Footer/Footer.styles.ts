import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const StyledFooter = styled.footer`
  background-color: white;
  padding: 100px 100px 150px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterColumnTitle = styled.h4`
  font-size: 1.375rem;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const FooterColumnItem = styled.a`
  color: ${(props: DaimleyTheme) => props.theme?.grayText};
  margin: 10px 0;
`;
