import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const HeaderTileWrapper = styled.div`
  border-radius: 6px;
  padding: 70px 30px 32px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-self: flex-start;
  width: 320px;

  @media only screen and (max-width: 425px) {
    margin-top: 30px;
    align-self: center;
    width: 100%;
  }

  &:first-of-type {
    margin-left: 100px;
    padding-bottom: 110px;
    background-color: ${(props: DaimleyTheme) => props.theme.greenSecondary};

    @media only screen and (max-width: 425px) {
      margin-left: 0;
    }
  }
`;

export const HeaderTileTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 50px;
  margin-top: 40px;
`;

export const HeaderTileLink = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-bottom: 25px;
  transition: all 0.3s;

  :hover {
    color: ${(props: DaimleyTheme) => props.theme.green};
  }
`;
