import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const RecruitmentSpecialityStyled = styled.section`
  padding: 120px 0 80px;
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 425px) {
    padding: 120px 20px 80px;
  }
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 540px;
  background-color: ${(props: DaimleyTheme) => props.theme.backgroundGray};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  @media only screen and (max-width: 425px) {
    height: 560px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const DescriptionSection = styled.section`
  max-width: 600px;
  margin-left: 50px;

  @media only screen and (max-width: 425px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 1.8;
  font-weight: bold;
  margin-bottom: 35px;
`;

export const SubTitle = styled.h6`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin: 120px 0 25px;
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 70px;

  & span {
    margin-left: 0.5rem;
  }
`;

export const WeSpecilizeDescription = styled.p`
  margin-bottom: 55px;
  font-size: 1.25rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 1.8;
`;

export const BulletsDescription = styled.h6`
  font-size: 1.25rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin-bottom: 30px;
`;
