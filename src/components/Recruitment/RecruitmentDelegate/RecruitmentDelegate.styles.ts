import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const RecruitmentDelegateStyled = styled.section`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding: 80px 40px;
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin-left: 80px;
  padding: 10px 0 10px 80px;
  max-width: 800px;
  border-left: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};

  @media only screen and (max-width: 425px) {
    border-left: none;
    margin-left: 0;
    padding-left: 0;
    margin-top: 30px;
  }
`;
