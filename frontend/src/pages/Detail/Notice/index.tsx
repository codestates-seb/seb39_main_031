import { useState } from "react";
import styled from "styled-components";

import NoticeButton from "../../../components/Notice/NoticeButton";
import NoticeEditor from "../../../components/Notice/NoticeEditor";
import NoticeList from "../../../components/Notice/NoticeList";

const Container = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 0;
  width: 100%;
`;

const Notice = () => {
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

export default Notice;
