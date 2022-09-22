import styled from "styled-components";

import BgImg from "../../../../assets/Image/background.jpg";
import SearchInput from "./SearchInput";

const MainBox = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${BgImg}) no-repeat;
  background-size: 100%;
  background-position: left top !important;
`;

const Paragraph = styled.div`
  font-size: ${(props) => {
    return props.theme.fontSize.size20;
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
  margin-bottom: 1em;

  div {
    color: ${(props) => {
      return props.theme.colors.black100;
    }};
  }
`;

const MainInput = () => {
  return (
    <MainBox>
      <Paragraph>
        <div>대용량 물건 구매, 배달음식 금액이 부담스럽다면</div>
        <div>우리 동네 사람들과 함께 구매해요!</div>
      </Paragraph>
      <SearchInput placeholder="검색어를 입력하세요." width="400px" />
    </MainBox>
  );
};
export default MainInput;
