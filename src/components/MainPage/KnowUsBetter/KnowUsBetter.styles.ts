import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const KnowUsBetterStyled = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
`;

export const KnowUsBetterWrapper = styled.div`
  width: 75vw;
  display: flex;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const DescriptionSection = styled.div`
  margin-left: 120px;
  width: 620px;

  @media only screen and (max-width: 425px) {
    width: auto;
    margin-left: 0;
    margin-top: 50px;
  }
`;

export const SubTitle = styled.h6`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin: 10px 0 25px;
`;

export const Title = styled.h1`
  margin-bottom: 90px;
  font-size: 2.75rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 80px;
  line-height: 2;
`;
