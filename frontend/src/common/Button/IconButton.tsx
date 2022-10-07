import styled from "styled-components";

import { IconButtonType, StyledButtonProps } from "../../types/Button";

const ButtonBox = styled.button<StyledButtonProps>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white000};
  color: ${({ theme }) => theme.colors.black900};
  font-size: 50px;
  padding: 0;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black100};
  }

  ${({ customButtonStyle }) => customButtonStyle && customButtonStyle};
`;

const IconButton = ({
  onClick,
  children,
  customButtonStyle,
}: IconButtonType) => {
  return (
    <ButtonBox customButtonStyle={customButtonStyle} onClick={onClick}>
      {children}
    </ButtonBox>
  );
};

export default IconButton;
