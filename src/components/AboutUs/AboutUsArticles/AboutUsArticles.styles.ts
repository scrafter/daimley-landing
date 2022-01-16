import { DaimleyTheme } from '@/theme';
import styled from '@emotion/styled';

export const AboutUsArticlesStyled = styled.section`
  background-color: ${(props: DaimleyTheme) => props.theme.greenSecondary};
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const Article = styled.article`
  padding: 0 100px;

  &:first-of-type {
    border-right: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  }
`;

export const ArticleDescription = styled.p`
  font-size: 1.125rem;
  line-height: 2;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin-bottom: 35px;
`;
