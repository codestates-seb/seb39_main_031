import { BlueButton } from "../../../common/Button/BorderButton";

interface Props {
  onClick: () => void;
}

const NoticeButton = ({ onClick }: Props) => {
  return <BlueButton onClick={onClick}>글쓰기</BlueButton>;
};

export default NoticeButton;
