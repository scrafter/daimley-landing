import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

interface IMenuStyled extends DaimleyTheme {
  isScrollOnTop: boolean;
  darkMenu?: boolean;
}

export const MenuStyled = styled.header<IMenuStyled>`
  border-bottom: ${(props) =>
    props.darkMenu &&
    props.isScrollOnTop &&
    `1px solid ${props.theme.borderGray}`};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  transition: all 0.3s;
  background-color: ${(props) => !props.isScrollOnTop && `rgba(0, 0, 0, 0.4)`};
  padding: ${(props) => (props.isScrollOnTop ? `30px` : `20px 40px`)};
  z-index: 1000;

  & a {
    color: ${(props) => (props.darkMenu ? `#000` : `#fff`)};
  }
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
  flex-shrink: 0;
  display: flex;
  align-items: center;

  &:not(.logo) {
    @media only screen and (max-width: 425px) {
      display: none;
    }
  }

  svg {
    margin-right: 6px;
  }

  :first-of-type {
    padding-left: 0;
  }
`;

export const MenuTrigger = styled.span`
  font-size: 36px;
  color: white;
  margin-right: 20px;
`;
