import styled from '@emotion/styled';

export const BulletsListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div > div {
    margin-bottom: 10px;
  }
`;
