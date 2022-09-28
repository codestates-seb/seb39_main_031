/* eslint-disable prettier/prettier */
import styled from "styled-components";

const InputBox = styled.div<{ width?: string; marginBottom?: string }>`
  width: ${({ width }) => (width ? width : "100%")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};

  > label {
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSize.size15};
  }
  > input {
    margin-top: 1rem;
    display: block;
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.black900};
    font-size: ${({ theme }) => theme.fontSize.size15};
    padding: 5px 12px;
    cursor: pointer;
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  width?: string;
  marginBottom?: string;
  type?: string;
  lableText?: string;
  value?: string;
  max?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = ({
  lableText,
  width,
  marginBottom,
  ...props
}) => {
  return (
    <InputBox width={width} marginBottom={marginBottom}>
      <label>{lableText}</label>
      {props.type === "number" ? (
        <input {...props} min="0" max={props.max} />
      ) : props.value ? (
        <input {...props} maxLength={30} value={props.value} readOnly />
      ) : (
        <input {...props} maxLength={30} />
      )}
    </InputBox>
  );
};

export default InputForm;
