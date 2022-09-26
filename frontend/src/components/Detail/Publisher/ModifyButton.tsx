import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const ModifyBtn = styled(Button)`
  border-radius: 3px;
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
