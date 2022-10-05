import { GrayButton } from "../../common/Button/BorderButton";
import { ButtonType } from "../../types/Button";

const EndButton = ({ onClick }: ButtonType) => {
  return (
    <GrayButton onClick={onClick} width="100px" height="30px">
      종료
    </GrayButton>
  );
};

export default EndButton;
