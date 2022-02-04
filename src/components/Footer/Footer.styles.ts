import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const StyledFooter = styled.footer``;

export const ColumnsWrapper = styled.div`
  padding: 100px 100px 70px;
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

export const Copyright = styled.p`
  padding: 40px 50px;
  border-top: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  font-size: 1rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  display: flex;
  justify-content: space-between;
  width: 100vw;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const StatuteLink = styled.a`
  text-decoration: none;
  color: ${(props: DaimleyTheme) => props.theme.gray};

  @media only screen and (max-width: 425px) {
    margin-top: 20px;
  }
`;
