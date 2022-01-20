import styled from '@emotion/styled';
import header from '@/assets/contact/contact1.jpg';

export const ContactHeaderStyled = styled.section`
  height: 470px;
  color: white;
  padding: 0 250px 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SubTitle = styled.h6`
  font-size: 1.375rem;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
`;
