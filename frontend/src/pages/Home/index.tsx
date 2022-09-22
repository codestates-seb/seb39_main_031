/* eslint-disable prettier/prettier */
import Button from "../../common/Button/ButtonForm";
import Modal from "../../common/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/Redux";
import { modalActions } from "../../redux/modalSlice";

const Home = () => {
  const modalState = useAppSelector(state => state.modal.modalVisible);
  const dispatch = useAppDispatch();

  const modalHandler = () => {
    dispatch(modalActions.modal());
  };

  return (
    <>
      <h1>Home</h1>
      <Button onClick={modalHandler}>Btn</Button>
      <Modal visible={modalState} onClick={modalHandler} />
    </>
  );
};

export default Home;
