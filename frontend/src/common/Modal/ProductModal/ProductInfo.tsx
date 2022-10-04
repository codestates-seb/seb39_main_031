import styled from "styled-components";

import { ProductModalInfo } from "../../../types/Modal";
import { Image } from "../../../types/post";

const Container = styled.main`
  width: 500px;
  height: auto;
  display: flex;
  border: 2px solid ${(props) => props.theme.colors.black200};
  border-radius: 4px;
  padding: 20px;
  column-gap: 10px;
`;

const ImageBox = styled.div<Image>`
  width: 40%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const InfoBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 10px;
`;

const Title = styled.header`
  font-size: 18px;
  font-weight: 900;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.black400};
  text-align: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  font-size: 15px;
  width: 100%;
  padding: 0 10px;

  div {
    display: flex;
    width: 100%;
  }

  .label {
    width: 20%;
    text-align: left;
    color: ${(props) => props.theme.colors.black500};
  }

  .value {
    width: 80%;
    text-align: right;
    color: ${(props) => props.theme.colors.black900};
    font-weight: 700;
  }
`;

const ProductInfo = ({
  image_uri,
  title,
  state_price,
  userNickname,
  quantity,
}: ProductModalInfo) => {
  return (
    <Container>
      <ImageBox image={image_uri} />
      <InfoBox>
        <Title>{title}</Title>
        <Content>
          <div>
            <span className="label">닉네임</span>
            <span className="value">{userNickname}</span>
          </div>
          <div>
            <span className="label">수량</span>
            <span className="value">{quantity}</span>
          </div>
          <div>
            <span className="label">금액</span>
            <span className="value">
              {(Number(quantity) * state_price).toLocaleString()} 원
            </span>
          </div>
        </Content>
      </InfoBox>
    </Container>
  );
};

export default ProductInfo;
