import styled from "styled-components";

import { BorderButtonType } from "../../types/Button";
import Button from "./ButtonForm";

const BlueContainer = styled(Button)`
  width: ${({ width }) => (width ? width : "70px")};
  height: ${({ height }) => (height ? height : "30px")};
  font-size: ${(props) => props.theme.fontSize.size15};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.cyan600};
  color: ${(props) => props.theme.colors.cyan600};

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &:active {
    background: ${(props) => props.theme.colors.black200};
  }
`;

export const BlueButton = ({
  onClick,
  children,
  ...props
}: BorderButtonType) => {
  return (
    <BlueContainer {...props} onClick={onClick}>
      {children}
    </BlueContainer>
  );
};

const GrayContainer = styled(BlueButton)`
  width: ${({ width }) => (width ? width : "70px")};
  height: ${({ height }) => (height ? height : "30px")};
  font-size: ${(props) => props.theme.fontSize.size15};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.black500};
  color: ${(props) => props.theme.colors.black500};

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &:active {
    background: ${(props) => props.theme.colors.black200};
  }
`;

export const GrayButton = ({
  onClick,
  children,
  ...props
}: BorderButtonType) => {
  return (
    <GrayContainer {...props} onClick={onClick}>
      {children}
    </GrayContainer>
  );
};
