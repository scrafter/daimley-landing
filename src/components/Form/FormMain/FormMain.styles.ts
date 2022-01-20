import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const FormMainStyles = styled.section`
  padding: 120px 20px 120px;
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  display: flex;
  justify-content: center;
`;

export const DescriptionWrapper = styled.div`
  margin-right: 70px;
  max-width: 480px;
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

  span {
    margin-left: 0.5rem;
  }
`;

export const Brief = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  font-weight: bold;
  margin-bottom: 55px;
`;

export const Description = styled.p`
  line-height: 2;
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  padding-bottom: 70px;
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  margin-bottom: 80px;
`;

export const Contact = styled.h3`
  line-height: 1.2;
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const ContactItem = styled.address`
  font-size: 1.875rem;
  font-weight: 300;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
  }

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }

  svg {
    margin-right: 17px;
  }
`;
