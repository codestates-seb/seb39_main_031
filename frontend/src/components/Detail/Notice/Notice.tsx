import { useState } from "react";
import styled from "styled-components";

import NoticeButton from "./NoticeButton";
import NoticeEditor from "./NoticeEditor";
import { NoticeList, ParticipantNoticeList } from "./NoticeList";

const Container = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 0;
  width: 100%;
`;

//게시자 공지사항
export const PublisherNotice = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Container>
      <ButtonBox>
        <NoticeButton onClick={() => setIsShow(!isShow)} />
      </ButtonBox>
      {isShow && <NoticeEditor setIsShow={setIsShow} />}
      <NoticeList />
    </Container>
  );
};

//참가자 공지사항
export const ParticipantNotice = () => {
  return (
    <Container>
      <ParticipantNoticeList />
    </Container>
  );
};
