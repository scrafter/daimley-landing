import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';
import backgroundImage from '@/assets/home/home3.jpg';

export const ReferencesStyled = styled.section`
  background-color: ${(props: DaimleyTheme) => props.theme.gray};
  color: white;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const DescriptionWrapper = styled.div`
  margin-right: 20px;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h6`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 70px;
  width: 500px;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 550px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Arrows = styled.div`
  display: flex;
  margin-top: 50px;

  svg:first-of-type {
    transform: rotate(180deg);
    margin-right: 60px;
  }
`;
