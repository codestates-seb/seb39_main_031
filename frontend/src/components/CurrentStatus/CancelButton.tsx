import { BlueButton } from "../../common/Button/BorderButton";
// import { useAppDispatch } from "../../hooks/Redux";
// import { openModal } from "../../redux/modalSlice";

interface Props {
  onClick: () => void;
}

//TODO: 참여 취소 모달
const CancelButton = ({ onClick }: Props) => {
  // const dispatch = useAppDispatch();

  // const cancelModalHandler = () => {
  //   dispatch(openModal({modalType: "productModal", isVisible: true,}));
  // };

  return (
    <BlueButton onClick={onClick} width="100px" height="30px">
      참여 취소
    </BlueButton>
  );
};

export default CancelButton;
