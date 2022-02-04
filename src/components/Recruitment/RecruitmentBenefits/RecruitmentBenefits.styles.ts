import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const RecruitmentBenefitsStyled = styled.section`
  position: relative;
  padding: 80px 0 150px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${(props: DaimleyTheme) => props.theme.borderGray};

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding: 80px 30px 150px;
  }
`;

export const BackgroundWrapper = styled.div`
  height: 600px;
  background-color: ${(props: DaimleyTheme) => props.theme.gray};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  @media only screen and (max-width: 425px) {
    height: 800px;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 650px;
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  color: white;
  margin-bottom: 90px;
  line-height: 1.36;
`;

export const BulletsWrapper = styled.div`
  margin-bottom: 200px;

  p {
    color: white;
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  font-size: 2.75rem;
  font-weight: bold;
  line-height: 1.36;
`;

export const ImageWrapper = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media only screen and (max-width: 425px) {
    margin-left: 0;
    margin-top: 60px;
  }

  button {
    margin-top: 80px;
  }
`;
