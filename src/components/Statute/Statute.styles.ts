import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const StatuteStyled = styled.section`
  max-width: 700px;
  margin: 30px auto;
  padding: 150px 0 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2.74rem;
  line-height: 1.36;
  margin-bottom: 70px;
`;

export const Link = styled.a`
  margin-top: 30px;
  font-size: 1.5rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  text-decoration: underline;
`;
