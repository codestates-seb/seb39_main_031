import { BlueButton } from "../../../common/Button/BorderButton";

interface Props {
  onClick?: () => void;
}

const ModifyButton = ({ onClick }: Props) => {
  return (
    <BlueButton width="50%" height="2.5em" onClick={onClick}>
      수정
    </BlueButton>
  );
};

export default ModifyButton;
