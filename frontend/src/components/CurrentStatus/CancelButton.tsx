import { BlueButton } from "../../common/Button/ColorButton";

interface Props {
  onClick: () => void;
}

const CancelButton = ({ onClick }: Props) => {
  return (
    <BlueButton onClick={onClick} width="100px" height="30px">
      참여 취소
    </BlueButton>
  );
};

export default CancelButton;
