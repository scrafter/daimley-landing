import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';
import header from '@/assets/home/home1.jpg';

export const StyledMainPageHeader = styled.header`
  background-image: url(${header});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 200px 200px 170px;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding: 200px 20px 170px;
  }
`;

export const MainPageLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;

  @media only screen and (max-width: 425px) {
    width: auto;
  }
`;

export const MainPageRightWrapper = styled.div`
  display: flex;

  div:first-of-type {
    margin-right: 20px;

    @media only screen and (max-width: 425px) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const MainPageTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: white;

  @media only screen and (max-width: 425px) {
    font-size: 60px;
  }
`;

export const MainPageDescription = styled.p`
  font-size: 1.375rem;
  color: white;
  margin: 60px 0 35px;
`;

export const MainPageButton = styled.button`
  color: white;
  background-color: ${(props: DaimleyTheme) => props.theme?.orange};
  cursor: pointer;
  border: none;
  padding: 25px 35px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  width: 220px;

  &:hover {
    background-color: {(props: DaimleyTheme) => props.theme.orange};
  }

  @media only screen and (max-width: 425px) {
    margin: 0 auto;
  }
`;
