import styled from '@emotion/styled';
import header from '@/assets/recruitment/header.jpg';

export const JobOffersHeaderStyled = styled.header`
  height: 600px;
  padding: 50px 200px;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & button {
    align-self: flex-start;
  }

  @media only screen and (max-width: 425px) {
    padding: 50px 20px;
  }
`;

export const SubTitle = styled.h5`
  font-size: 1.375rem;
  font-weight: bold;
  margin-bottom: 25px;
`;
export const Title = styled.h1`
  margin-bottom: 25px;
  font-size: 5rem;
  font-weight: bold;

  @media only screen and (max-width: 425px) {
    font-size: 3rem;
  }
`;
