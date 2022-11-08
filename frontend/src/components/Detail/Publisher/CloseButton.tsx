/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "react-query";
import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";
import { closeProduct } from "../../../config/API/api";
import { getCookie } from "../../../config/Cookie";

const Container = styled(Button)`
  border-radius: 3px;
`;

type Props = {
  product_id: number;
};

const CloseButton = ({ product_id }: Props) => {
  const { authorization } = getCookie("userInfo");

  const { mutate } = useMutation((product_id: number) =>
    closeProduct(product_id, authorization)
  );

  const CloseHandler = () => {
    if (window.confirm("해당 공동구매 모집을 종료하시겠습니까?")) {
      mutate(product_id, {
        onSuccess: () => {},
      });
    }
  };

  return (
    <Container width="100%" height="2.5em" onClick={CloseHandler}>
      모집 종료
    </Container>
  );
};

export default CloseButton;
