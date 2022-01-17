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
`;

export const DescriptionWrapper = styled.div`
  margin-left: 100px;
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
`;

export const Article = styled.article`
  font-size: 1.125rem;
  line-height: 2;
  color: ${(props: DaimleyTheme) => props.theme.gray};

  &:first-of-type {
    border-right: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
    padding-right: 80px;
    max-width: 620px;
  }

  &:last-of-type {
    padding-left: 80px;
  }
`;
