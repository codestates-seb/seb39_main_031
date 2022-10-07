import { GrayButton } from "../../../common/Button/BorderButton";
import { ButtonType } from "../../../types/Button";

const DeleteButton = ({ onClick }: ButtonType) => {
  return (
    <GrayButton width="50%" height="2.5em" onClick={onClick}>
      삭제
    </GrayButton>
  );
};

export default DeleteButton;
