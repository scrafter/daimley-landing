import styled from '@emotion/styled';

export const AboutUsConsultingStyled = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }

  button {
    @media only screen and (max-width: 425px) {
      margin-bottom: 30px;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 2;
  margin-bottom: 35px;
  max-width: 600px;
  margin-right: 100px;

  @media only screen and (max-width: 425px) {
    margin-right: 0;
  }
`;
