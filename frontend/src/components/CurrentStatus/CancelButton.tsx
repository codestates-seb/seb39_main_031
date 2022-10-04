import { BlueButton } from "../../common/Button/BorderButton";
// import { useAppDispatch } from "../../hooks/Redux";
// import { modalActions } from "../../redux/modalSlice";

//TODO: 참여 취소 모달
const CancelButton = () => {
  // const dispatch = useAppDispatch();

  // const cancelModalHandler = () => {
  //   dispatch(modalActions.cancelModal());
  // };

  return (
    <BlueButton width="100px" height="30px">
      참여 취소
    </BlueButton>
  );
};

export default CancelButton;
