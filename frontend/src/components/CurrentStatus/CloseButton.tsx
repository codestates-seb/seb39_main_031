import { GrayButton } from "../../common/Button/BorderButton";
import { useAppDispatch } from "../../hooks/Redux";
import { openModal } from "../../redux/modalSlice";

const CloseButton = () => {
  const dispatch = useAppDispatch();
  const endModalHandler = () => {
    dispatch(openModal({ modalType: "endModal", isVisible: true }));
  };

  return (
    <GrayButton onClick={endModalHandler} width="100px" height="30px">
      종료
    </GrayButton>
  );
};

export default CloseButton;
