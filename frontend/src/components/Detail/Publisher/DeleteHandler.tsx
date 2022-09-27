import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const DeleteBtn = styled(Button)`
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

const DeleteButton = () => {
  const DeleteHandler = () => {
    console.log("삭제");
  };

  return (
    <DeleteBtn width="50%" height="2.5em" onClick={DeleteHandler}>
      삭제
    </DeleteBtn>
  );
};

export default DeleteButton;
