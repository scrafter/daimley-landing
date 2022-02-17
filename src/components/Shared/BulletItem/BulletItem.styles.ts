import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const BulletItemStyled = styled.div`
  display: flex;

  & > svg {
    margin-top: 5px;
    flex-shrink: 0;
  }
`;

export const Text = styled.p`
  margin-left: 20px;
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${(props: DaimleyTheme) => props.theme.gray};
`;
