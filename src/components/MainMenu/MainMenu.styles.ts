import styled from '@emotion/styled';

export const MenuStyled = styled.header<{ isScrollOnTop: boolean }>`
  color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  transition: all 0.3s;
  background-color: ${(props) => !props.isScrollOnTop && `rgba(0, 0, 0, 0.4)`};
  padding: ${(props) => (props.isScrollOnTop ? `40px` : `20px 40px`)};
`;

export const MenuGroup = styled.div`
  display: flex;
`;

export const MenuItemStyled = styled.a`
  padding: 0 60px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
