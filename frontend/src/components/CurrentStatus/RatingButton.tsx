import { BlueButton } from "../../common/Button/ColorButton";
import { ButtonType } from "../../types/Button";

const RatingButton = ({ onClick }: ButtonType) => {
  return (
    <BlueButton onClick={onClick} width="100px" height="30px">
      평점
    </BlueButton>
  );
};

export default RatingButton;
