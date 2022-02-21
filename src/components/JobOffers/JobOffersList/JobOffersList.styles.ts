import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const JobOffersListStyled = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SubTitle = styled.h6`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 70px;
  text-align: center;
`;

export const List = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    padding: 0;
  }
`;
