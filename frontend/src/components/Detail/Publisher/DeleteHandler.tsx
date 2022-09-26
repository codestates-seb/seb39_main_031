import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const DeleteBtn = styled(Button)`
  border-radius: 3px;
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
