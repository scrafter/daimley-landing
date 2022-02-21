import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const JobOffersDescriptionStyled = styled.section`
  padding: 120px 20px 80px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 650px;
  margin-left: 50px;

  @media only screen and (max-width: 425px) {
    margin-top: 50px;
    margin-left: 0;
  }
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
  line-height: 4rem;

  & span {
    margin-left: 0.5rem;
  }
`;
