import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const StyledButton = styled.button`
  background-color: ${(props: DaimleyTheme) => props.theme?.orange};
  padding: 25px 20px;
  color: white;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
`;
