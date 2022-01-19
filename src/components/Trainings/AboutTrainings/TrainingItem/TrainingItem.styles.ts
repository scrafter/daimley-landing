import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const TrainingItemStyled = styled.article`
  padding: 40px;
  display: flex;
  flex-direction: column;

  :nth-of-type(even) {
    background-color: ${(props: DaimleyTheme) => props.theme.backgroundGray};
  }
`;

export const Table = styled.table`
  table-layout: fixed;

  .last-row button {
    width: 100%;
  }
`;

export const Badge = styled.div`
  padding: 6px 10px;
  color: white;
  font-size: 1rem;
  background-color: ${(props: DaimleyTheme) => props.theme.underlineGreen};
  border-radius: 6px;
  display: inline-flex;
`;

export const Title = styled.h3`
  font-size: 1.375rem;
  font-weight: bold;
  margin-top: 18px;
  max-width: 300px;
`;

export const ParapgraphWrapper = styled.div`
  padding: 35px 25px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #707070;
  line-height: 1.63;
  max-width: 750px;

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }
`;

export const ReadMoreButton = styled.button`
  border: 2px solid ${(props: DaimleyTheme) => props.theme?.orange};
  cursor: pointer;
  border-radius: 6px;
  background-color: transparent;
  padding: 16px 22px;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 25px;
`;
