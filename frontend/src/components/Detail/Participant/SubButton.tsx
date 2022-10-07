import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";
import { ButtonType } from "../../../types/Button";

const Subbutton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.black400};
  border-radius: 3px;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  font-size: 12px;
  background-color: white;
  color: black;

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

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 55px;
  }
`;

const DetailSubButton = ({ onClick, children }: ButtonType) => {
  return <Subbutton onClick={onClick}>{children}</Subbutton>;
};

export default DetailSubButton;
