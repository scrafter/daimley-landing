import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const JobOffersDescriptionStyled = styled.section`
  padding: 120px 20px 80px;
  display: flex;
  justify-content: center;
`;

export const DescriptionWrapper = styled.div`
  max-width: 650px;
  margin-left: 50px;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 1.8;
  margin-bottom: 35px;

  &:nth-of-type(2) {
    margin-top: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 70px;

  & span {
    margin-left: 0.5rem;
  }
`;
