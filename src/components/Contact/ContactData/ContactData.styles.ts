import styled from '@emotion/styled';

export const ContactDataStyled = styled.section`
  padding: 0 40px;
  display: flex;
  position: relative;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

export const DataSection = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 425px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 80px;
  max-width: 180px;

  @media only screen and (max-width: 425px) {
    max-width: none;
    padding: 0 30px;
  }
`;

export const Phone = styled.a`
  color: #000;
  font-size: 1.875rem;
  font-weight: 300;
  margin-bottom: 20px;
  text-decoration: none;

  @media only screen and (max-width: 425px) {
    text-align: center;
  }
`;

export const Email = styled.a`
  font-size: 1.25rem;
  line-height: 2;
  color: #000;
  text-decoration: none;

  @media only screen and (max-width: 425px) {
    text-align: center;
  }
`;
