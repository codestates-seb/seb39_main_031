import styled from "styled-components";

import BgImg from "../../../../assets/Image/background2.jpg";
import SearchInput from "./SearchInput";

const MainBox = styled.section`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${BgImg}) no-repeat;
  background-size: cover;
  background-position: center !important;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    height: 400px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    height: 500px;
  }
`;

const Paragraph = styled.div`
  width: 100%;
  font-size: 1em;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
  letter-spacing: 2px;
  margin: 1rem 0;

  div {
    color: ${(props) => props.theme.colors.white000};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    font-size: 1.5em;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    font-size: 2em;
  }
`;

const MainInput = () => {
  return (
    <MainBox>
      <Paragraph>
        <div>대용량 물건 구매, 배달음식 금액이 부담스럽다면</div>
        <div>우리 동네 사람들과 함께 구매해요!</div>
      </Paragraph>
      <SearchInput placeholder="검색어를 입력하세요." className="main" />
    </MainBox>
  );
};
export default MainInput;
