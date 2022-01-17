import styled from '@emotion/styled';
import header from '@/assets/recruitment/header.jpg';

export const RecruitmentHeaderStyled = styled.header`
  height: 600px;
  padding: 50px 200px;
  background-image: url(${header});
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & button {
    align-self: flex-start;
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
`;
