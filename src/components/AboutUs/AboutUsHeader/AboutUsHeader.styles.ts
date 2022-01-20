import styled from '@emotion/styled';
import header from '@/assets/aboutUs/aboutUs1.jpg';

export const AboutUsHeaderStyled = styled.header`
  height: 600px;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 250px 50px;
  color: white;
`;

export const SubTitle = styled.h6`
  margin-bottom: 15px;
  font-size: 1.375rem;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
`;
