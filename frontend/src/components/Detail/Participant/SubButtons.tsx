/* eslint-disable prettier/prettier */
import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiAlarmWarningLine } from "react-icons/ri";
import { useMutation } from "react-query";
import styled from "styled-components";

import { favoriteBtnHandler } from "../../../config/API/api";
import { getCookie } from "../../../config/Cookie";
import DetailSubButton from "./SubButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1em;
`;

type Props = {
  product_id: number;
};

const SubButtons = ({ product_id }: Props) => {
  const [favorite, setFavorite] = useState(false);
  const cookie = getCookie("userInfo");

  const { mutate } = useMutation((product_id: number) =>
    favoriteBtnHandler(product_id, cookie.authorization)
  );

  const favoriteHandler = () => {
    mutate(product_id, {
      onSuccess: () => {
        console.log("좋아요");
      },
      onError: error => {
        console.log(error);
      },
    });
    setFavorite(!favorite);
    console.log("관심버튼");
  };

  const inquiryHandler = () => {
    console.log("문의버튼");
  };

  const shareHandler = () => {
    console.log("공유버튼");
  };

  const reportHandler = () => {
    console.log("신고버튼");
  };

  return (
    <Container>
      <DetailSubButton onClick={favoriteHandler}>
        {favorite ? (
          <HiHeart className="icon favorite" />
        ) : (
          <HiOutlineHeart className="icon" />
        )}
        <div>0</div>
      </DetailSubButton>
      <DetailSubButton onClick={inquiryHandler}>
        <IoChatbubbleEllipsesOutline className="icon" />
        <div>문의</div>
      </DetailSubButton>
      <DetailSubButton onClick={shareHandler}>
        <AiOutlineShareAlt className="icon" />
        <div>공유</div>
      </DetailSubButton>
      <DetailSubButton onClick={reportHandler}>
        <RiAlarmWarningLine className="icon" />
        <div>신고</div>
      </DetailSubButton>
    </Container>
  );
};

export default SubButtons;
