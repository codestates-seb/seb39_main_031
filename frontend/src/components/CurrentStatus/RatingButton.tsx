import { BlueButton } from "../../common/Button/BorderButton";
import { useAppDispatch } from "../../hooks/Redux";
import { openModal } from "../../redux/modalSlice";

const RatingButton = () => {
  const dispatch = useAppDispatch();
  const ratingModalHandlr = () => {
    dispatch(openModal({ modalType: "ratingModal", isVisible: true }));
  };

  return (
    <BlueButton onClick={ratingModalHandlr} width="100px" height="30px">
      평점
    </BlueButton>
  );
};

export default RatingButton;
