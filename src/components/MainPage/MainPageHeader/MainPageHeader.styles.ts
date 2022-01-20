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
`;

export const MainPageLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
`;

export const MainPageRightWrapper = styled.div`
  display: flex;
  div:first-of-type {
    margin-right: 20px;
  }
`;

export const MainPageTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: white;
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
`;
