import styled from "styled-components";

import { ButtonType } from "../../types/Button";

const NewButton = styled.button<ButtonType>`
  width: ${({ width }) => (width ? width : "90px")};
  height: ${({ height }) => (height ? height : "30px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ({ theme }) => theme.colors.cyan400};
  border: none;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverBackground }) =>
      hoverBackground ? hoverBackground : ({ theme }) => theme.colors.cyan700};
  }
`;

const Button: React.FC<ButtonType> = ({ ...props }) => {
  if (!props.onClick) {
    return <NewButton {...props}>{props.children}</NewButton>;
  }

  return (
    <NewButton onClick={props.onClick} {...props}>
      {props.children}
    </NewButton>
  );
};

export default Button;
