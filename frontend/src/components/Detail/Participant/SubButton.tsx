import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";
import { ButtonType } from "../../../types/Button";

const Subbutton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.black400};
  border-radius: 3px;
  margin-top: 10px;

  .icon {
    font-size: ${(props) => props.theme.fontSize.size20};
  }

  .favorite {
    color: ${(props) => props.theme.colors.red500};
  }

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &:active {
    background: ${(props) => props.theme.colors.black200};
  }
`;

const DetailSubButton = ({ onClick, children }: ButtonType) => {
  return (
    <Subbutton
      width="55px"
      height="50px"
      fontSize="12px"
      backgroundColor="white"
      color="black"
      onClick={onClick}
    >
      {children}
    </Subbutton>
  );
};

export default DetailSubButton;
