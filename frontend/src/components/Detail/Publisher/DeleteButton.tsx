import { GrayButton } from "../../../common/Button/BorderButton";

interface Props {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: Props) => {
  return (
    <GrayButton width="50%" height="2.5em" onClick={onClick}>
      삭제
    </GrayButton>
  );
};

export default DeleteButton;
