import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const RecruitmentProcessStyled = styled.section`
  padding: 80px 20px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h5`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  margin-bottom: 70px;
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  max-width: 780px;
  line-height: 2;
  text-align: center;
`;

export const StagesWrapper = styled.div`
  display: flex;
`;

export const Stage = styled.article`
  padding: 0 45px;
  max-width: 400px;

  &:not(:last-of-type) {
    border-right: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  }

  &:first-of-type h3 {
    max-width: 200px;
  }
`;

export const StageTitle = styled.h3`
  margin: 30px 0 40px;
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 1.2;
`;

export const StageDescription = styled.p`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  max-width: 780px;
  line-height: 2;
`;
