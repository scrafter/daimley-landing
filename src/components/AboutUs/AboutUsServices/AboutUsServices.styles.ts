import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const AboutUsServicesStyled = styled.section`
  padding: 120px;
  border: solid ${(props: DaimleyTheme) => props.theme.borderGray};
  border-width: 1px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 425px) {
    padding: 120px 20px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 70px;

  @media only screen and (max-width: 425px) {
    margin-bottom: 0;
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
`;

export const Brief = styled.p`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 2;
  width: 600px;
  margin: 0 auto;

  @media only screen and (max-width: 425px) {
    width: auto;
  }
`;

export const SectionsWrapper = styled.div`
  margin: 75px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  padding: 0 80px;

  @media only screen and (max-width: 425px) {
    padding: 30px 20px;
  }

  & > button {
    padding: 20px 50px;
  }

  &:not(:last-of-type) {
    border-right: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};

    @media only screen and (max-width: 425px) {
      border-right: 0;
    }
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  margin: 25px 0 35px;
`;

export const SectionContent = styled.p`
  font-size: 1.125rem;
  margin-bottom: 35px;
  max-width: 350px;
  line-height: 2;
  color: ${(props: DaimleyTheme) => props.theme.gray};
`;

export const Contact = styled.div`
  color: ${(props: DaimleyTheme) => props.theme.gray};
  font-size: 1.125rem;
  line-height: 2;
  max-width: 540px;
  margin: 0 auto;
  text-align: center;

  & > a {
    color: ${(props: DaimleyTheme) => props.theme.orange};
  }
`;
