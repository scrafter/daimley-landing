import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const ContactOffersStyled = styled.section`
  padding: 120px 20px;
  background-color: ${(props: DaimleyTheme) => props.theme.gray};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 75vw;
  display: flex;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0 40px;

  &:not(:last-of-type) {
    border-right: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  }

  & > button {
    align-self: flex-start;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  & > img {
    margin-right: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-left: 20px;
`;

export const SectionDescription = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.8;
  margin-bottom: 40px;
  width: 400px;

  & > a {
    color: ${(props: DaimleyTheme) => props.theme.orange};
  }
`;

export const PostScript = styled.p`
  font-size: 1.125rem;
  line-height: 2;
  width: 400px;
  margin: 80px 0 0;
`;

export const Contact = styled.p`
  font-size: 1.125rem;
  line-height: 2;

  & > a {
    color: ${(props: DaimleyTheme) => props.theme.orange};
  }
`;
