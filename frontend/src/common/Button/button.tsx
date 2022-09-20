import styled from "styled-components";

import { ButtonType } from "../../types/Button";

const NewButton = styled.button<ButtonType>`
  width: ${({ width }) => (width ? width : "90px")};
  height: ${({ height }) => (height ? height : "30px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#7FB77E"};
  border: none;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverBackground }) =>
      hoverBackground ? hoverBackground : "#064420"};
  }
`;

const Button = (props: ButtonType) => {
  return (
    <NewButton onClick={props.onClick} {...props}>
      {props.children}
    </NewButton>
  );
};

export default Button;
