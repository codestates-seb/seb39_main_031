import styled, { css } from "styled-components";

import { ProductModalType } from "../../../types/Modal";
import { BlueButton, GrayButton } from "../../Button/BorderButton";
import Modal from "../Modal";
import ProductInfo from "./ProductInfo";

const customModalStyle = css`
  width: auto;
  height: auto;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
`;

const Title = styled.header`
  font-size: 24px;
  font-weight: 900;
`;

const ButtonBox = styled.section`
  display: flex;
  column-gap: 2em;
`;

const ProductModal = ({
  modalTitle,
  visible,
  onCheck,
  onCancel,
  image_uri,
  title,
  state_price,
  userNickname,
  quantity,
}: ProductModalType) => {
  return (
    <Modal visible={visible} customModalStyle={customModalStyle}>
      <Title>{modalTitle}</Title>
      <ProductInfo
        image_uri={image_uri}
        title={title}
        state_price={state_price}
        userNickname={userNickname}
        quantity={quantity}
      />
      <ButtonBox>
        <BlueButton onClick={onCheck}>확인</BlueButton>
        <GrayButton onClick={onCancel}>취소</GrayButton>
      </ButtonBox>
    </Modal>
  );
};

export default ProductModal;
