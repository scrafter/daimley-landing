import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

interface IMenuStyled extends DaimleyTheme {
  isScrollOnTop: boolean;
}

export const MenuStyled = styled.header<IMenuStyled>`
  color: white;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  transition: all 0.3s;
  background-color: ${(props) => !props.isScrollOnTop && `rgba(0, 0, 0, 0.4)`};
  padding: ${(props) => (props.isScrollOnTop ? `30px` : `20px 40px`)};
  z-index: 1000;
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItemStyled = styled.a`
  padding: 0 40px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: white;
  flex-shrink: 0;

  :first-of-type {
    padding-left: 0;
  }
`;
