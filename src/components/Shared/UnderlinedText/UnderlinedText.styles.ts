import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const UnderlinedTextStyled = styled.span`
  padding-bottom: 3px;
  border-bottom: 4px solid
    ${(props: DaimleyTheme) => props.theme.underlineGreen};
  margin-left: 1rem;
`;
