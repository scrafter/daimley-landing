import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const AboutUsDaimleyWorldStyles = styled.section`
  padding: 120px 0;
  background-color: ${(props: DaimleyTheme) => props.theme.gray};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  padding: 0 13vw 120px;
  width: 100vw;
  display: flex;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const SubTitle = styled.h5`
  font-size: 1.375rem;
  font-weight: bold;
  width: 50%;

  @media only screen and (max-width: 425px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  line-height: 1.36;
  width: 50%;
`;

export const BottomWrapper = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  margin-top: -5px;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const Article = styled.article`
  padding: 0 20px;
`;

export const ArticleBullet = styled.div`
  background-color: ${(props: DaimleyTheme) => props.theme.underlineGreen};
  border-radius: 50%;
  height: 9px;
  width: 9px;
  border: 2px solid ${(props: DaimleyTheme) => props.theme.gray};

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

export const ArticleTitle = styled.h4`
  font-size: 1.375rem;
  font-weight: bold;
  margin: 30px 0 35px;
`;

export const ArticleContent = styled.p`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.borderGray};
  line-height: 2;
`;

export const ContactSection = styled.div`
  margin-top: 150px;
  display: flex;
  width: 100%;
  align-items: center;

  & > button {
    padding: 25px 80px;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  line-height: 1.36;
  margin-right: 80px;

  @media only screen and (max-width: 425px) {
    margin-bottom: 50px;
    text-align: center;
    margin-right: 0;
  }
`;
