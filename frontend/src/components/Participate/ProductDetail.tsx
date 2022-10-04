/* eslint-disable prettier/prettier */
import styled from "styled-components";

import { participate_product } from "../../types/participate";

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black300};
  padding-bottom: 18px;
  margin-bottom: 1rem;
`;

const ImgContent = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const InfoContent = styled.div`
  width: 60%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > span {
    font-size: ${({ theme }) => theme.fontSize.size20};
    font-weight: 800;
  }
`;

const ProductUnit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.size18};
`;

const ProductLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.size18};

  .percentage {
    color: ${({ theme }) => theme.colors.cyan600};
    margin-right: 15px;
  }
`;

const ProductDetail = (props: participate_product) => {
  const todayTime = new Date().getTime();
  const enddayTime = new Date(props.ended_time).getTime();
  const D_day = Math.floor((enddayTime - todayTime) / (1000 * 60 * 60 * 24));

  const leftOver = props.goal_num - props.state_num;

  return (
    <ProductContainer>
      <ImgContent>
        <img src={props.image_uri} alt={props.title} />
      </ImgContent>
      <InfoContent>
        <ProductTitle>
          <span>{props.title}</span>
        </ProductTitle>
        <ProductUnit>
          <span>
            {props.unit} 당 {props.base_price}
          </span>
        </ProductUnit>
        <ProductLeft>
          <span className="percentage">{`${leftOver}개 남음`}</span>
          {D_day < 0 ? (
            <span>종료되었습니다.</span>
          ) : D_day === 0 ? (
            <span>오늘 마감됩니다.</span>
          ) : (
            <span>{`마감 ${D_day}일 전`}</span>
          )}
        </ProductLeft>
      </InfoContent>
    </ProductContainer>
  );
};

export default ProductDetail;
