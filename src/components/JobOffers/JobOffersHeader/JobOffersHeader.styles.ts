import styled from '@emotion/styled';
import background from '@/assets/trainings/trainings1.jpg';

export const JobOffersHeaderStyled = styled.section`
  height: 550px;
  color: white;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 200px;

  @media only screen and (max-width: 425px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 5rem;
`;

export const Description = styled.p`
  padding-bottom: 100px;
  font-size: 1.375rem;
  line-height: 1.64;
  max-width: 540px;
`;
