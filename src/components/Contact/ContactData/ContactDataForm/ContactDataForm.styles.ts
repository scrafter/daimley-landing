import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const ContactDataFormStyled = styled.form`
  padding: 80px;
  background-color: ${(props: DaimleyTheme) => props.theme.greenSecondary};
  position: relative;
  top: -200px;

  & button {
    width: 100%;
    margin-top: 30px;
  }

  @media only screen and (max-width: 425px) {
    top: 0;
    padding: 80px 20px;
    margin-top: 30px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 50px;
  font-size: 1.875rem;
  font-weight: bold;
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const FieldGroup = styled.div<{ isInvalid?: boolean }>`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  & > input:first-of-type {
    margin-right: 30px;
  }

  & > label {
    color: ${(props) => props.isInvalid && `red`};
  }

  & > input,
  & > textarea {
    border-color: ${(props) => props.isInvalid && `red`};
  }
`;

export const Label = styled.label`
  color: ${(props: DaimleyTheme) => props.theme.gray};
  margin-bottom: 15px;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const Field = styled.input`
  padding: 20px 40px;
  border-radius: 6px;
  font-weight: 300;
  border: 1px solid ${(props: DaimleyTheme) => props.theme.underlineGreen};
`;

export const Textarea = styled.textarea`
  height: 150px;
  padding: 20px 40px;
  border-radius: 6px;
  font-weight: 300;
  border: 1px solid ${(props: DaimleyTheme) => props.theme.underlineGreen};
`;
