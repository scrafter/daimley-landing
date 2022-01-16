import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const WeAreDaimleyStyled = styled.section`
  margin: 150px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeAreDaimleyWrapper = styled.div`
  width: 75vw;
`;

export const WeAreDaimleySubTitle = styled.h6`
  color: ${(props: DaimleyTheme) => props.theme.gray}
  font-size: 1.125rem;
  margin-bottom: 25px;
  font-weight: bold;
`;

export const WeAreDaimleyTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;

  & > div {
    margin-bottom: 10px;
  }
`;

export const WeAreDaimleyTilesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const WeAreDaimleyTile = styled.div`
  padding: 80px 10px 140px;
  margin-top: 40px;
  background-color: ${(props: DaimleyTheme) => props.theme.greenSecondary};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 440px;

  &:not(:last-of-type) {
    margin-right: 20px;
    color: ${(props: DaimleyTheme) => props.theme.gray};
  }

  & > p {
    margin-top: 40px;
    text-align: center;
    font-size: 1.125rem;
  }
`;

export const WeAreDaimleyFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

export const WeAreDaimleyDescription = styled.p`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  width: 470px;
`;
