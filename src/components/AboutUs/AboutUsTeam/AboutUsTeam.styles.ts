import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const AboutUsTeamStyled = styled.section`
  padding: 160px 0 50px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 75vw;
  display: flex;
`;

export const Image = styled.img`
  height: 670px;
  width: 540px;
  background-color: #707070;
  margin-right: 100px;
`;

export const SubTitle = styled.h6`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 70px;

  & > span {
    margin-left: 0;
    margin-right: 0.5rem;
  }
`;

export const Brief = styled.h4`
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin-bottom: 40px;
  max-width: 600px;
`;

export const Description = styled.h4`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  max-width: 600px;

  &:first-of-type {
    margin-bottom: 40px;
  }

  &:last-of-type {
    text-align: right;
    margin-top: 25px;
  }
`;
