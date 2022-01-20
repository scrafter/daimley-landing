import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const AboutUsTeamStyled = styled.section`
  padding: 160px 0 50px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const DescriptionWrapper = styled.div`
  margin-left: 100px;
  max-width: 600px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
  line-height: 2;
  margin-bottom: 40px;

  &:last-of-type {
    text-align: right;
    margin-top: 25px;
    margin-bottom: 0;
  }
`;
