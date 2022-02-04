import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const AboutUsKnowLedgeStyled = styled.section`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PositionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75vw;
  margin-bottom: 120px;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 50px;
    width: auto;
    padding: 0 30px;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-left: 100px;

  @media only screen and (max-width: 425px) {
    margin-left: 0;
    margin-top: 50px;
  }
`;

export const SubTitle = styled.h6`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${(props: DaimleyTheme) => props.theme.gray};
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 50px;

  & > span {
    margin-left: 0.5rem;
  }
`;

export const Description = styled.article`
  max-width: 615px;
  font-size: 1.125rem;
  line-height: 2;
  color: ${(props: DaimleyTheme) => props.theme.gray};
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  width: 75vw;

  @media only screen and (max-width: 425px) {
    width: auto;
    flex-direction: column;
  }
`;

export const Article = styled.article`
  font-size: 1.125rem;
  line-height: 2;
  color: ${(props: DaimleyTheme) => props.theme.gray};

  @media only screen and (max-width: 425px) {
    padding: 0 30px;
  }

  &:first-of-type {
    border-right: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
    padding-right: 80px;
    max-width: 620px;

    @media only screen and (max-width: 425px) {
      padding-right: 0;
    }
  }

  &:last-of-type {
    padding-left: 80px;

    @media only screen and (max-width: 425px) {
      padding-left: 30px;
      margin-top: 30px;
    }
  }
`;
