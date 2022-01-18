import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const TrainingsBriefStyled = styled.section`
  display: flex;
  justify-content: center;
  padding: 120px 20px;
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};

  & button {
    align-self: flex-start;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-left: 50px;
  max-width: 610px;
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const Summary = styled.h6`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 2;
  margin-bottom: 45px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 2;
  margin-bottom: 25px;

  &:last-of-type {
    margin-bottom: 50px;
  }
`;
