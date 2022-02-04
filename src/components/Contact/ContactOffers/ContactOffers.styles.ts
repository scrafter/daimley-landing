import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const ContactOffersStyled = styled.section`
  padding: 120px 20px;
  background-color: ${(props: DaimleyTheme) => props.theme.gray};
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    margin-top: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0 40px;

  @media only screen and (max-width: 425px) {
    padding: 0;
  }

  &:not(:last-of-type) {
    border-right: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};

    @media only screen and (max-width: 425px) {
      margin-bottom: 80px;
      border-right: 0;
    }
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

  @media only screen and (max-width: 425px) {
    width: auto;
  }

  & > a {
    color: ${(props: DaimleyTheme) => props.theme.orange};
  }
`;

export const PostScript = styled.p`
  font-size: 1.125rem;
  line-height: 2;
  width: 400px;
  margin: 80px 0 0;

  @media only screen and (max-width: 425px) {
    width: auto;
  }
`;

export const Contact = styled.p`
  font-size: 1.125rem;
  line-height: 2;
  display: flex;
  align-items: center;

  & > a {
    margin-left: 10px;
    color: ${(props: DaimleyTheme) => props.theme.orange};

    &.phone {
      text-decoration: none;
      color: #fff;
    }
  }
`;
