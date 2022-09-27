import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiAlarmWarningLine } from "react-icons/ri";
import styled from "styled-components";

import DetailSubButton from "./SubButton";

const Container = styled.div`
  display: flex;
  column-gap: 15px;
`;

const SubButtons = () => {
  const [favorite, setFavorite] = useState(false);

  const favoriteHandler = () => {
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
