import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const ModifyBtn = styled(Button)`
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.cyan600};
  color: ${(props) => props.theme.colors.cyan700};
  font-size: 14px;

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &:active {
    background: ${(props) => props.theme.colors.black200};
  }
`;

const ModifyButton = () => {
  const ModifyHandler = () => {
    console.log("수정");
  };

  return (
    <ModifyBtn width="50%" height="2.5em" onClick={ModifyHandler}>
      수정
    </ModifyBtn>
  );
};

export default ModifyButton;
