import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const TrainingsContactStyled = styled.section`
  background-color: ${(props: DaimleyTheme) => props.theme.gray};
  padding: 120px 0 120px 200px;
  color: white;
  display: flex;
  align-items: center;

  & > button {
    padding: 25px 70px;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding: 120px 30px;
  }
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  margin-right: 70px;
  line-height: 1.36;

  @media only screen and (max-width: 425px) {
    margin-bottom: 50px;
  }
`;

export const ContactDataWrapper = styled.address`
  margin-left: 80px;
  padding-left: 80px;
  border-left: 1px solid white;

  @media only screen and (max-width: 425px) {
    border: 0;
    margin-left: 0;
    padding-left: 0;
  }
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.875rem;
  font-weight: 300;
  margin-bottom: 10px;
  a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
  }

  @media only screen and (max-width: 425px) {
    margin: 50px 0 20px;
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
  }
`;
