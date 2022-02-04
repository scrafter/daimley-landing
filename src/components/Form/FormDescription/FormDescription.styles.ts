import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const FormDescriptionStyled = styled.section`
  padding: 95px 20px 120px;
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-left: 70px;
  max-width: 650px;

  @media only screen and (max-width: 425px) {
    margin-left: 0;
    margin-top: 50px;
  }
`;

export const SubTitle = styled.h6`
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2.74rem;
  line-height: 1.36;
  margin-bottom: 70px;

  & > span {
    margin-right: 0.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 2;
  color: ${(props: DaimleyTheme) => props.theme.gray};

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }
`;
