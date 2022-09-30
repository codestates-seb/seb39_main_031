import styled from "styled-components";

import { Data } from "../../mocks/data";

const ProductContainer = styled.div`
  width: 100%;
  height: 40%;
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
`;

const InfoTitle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  padding-left: 30px;

  > span {
    font-size: ${({ theme }) => theme.fontSize.size20};
    font-weight: 800;
  }
`;

const InfoDetail = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  padding-left: 30px;

  font-size: ${({ theme }) => theme.fontSize.size18};

  .percentage {
    color: ${({ theme }) => theme.colors.cyan600};
    margin-right: 15px;
  }
`;

const ProductDetail = () => {
  const data = Data[0];

  const todayTime = new Date().getTime();
  const enddayTime = new Date(data.ended_time).getTime();
  const D_day = Math.floor((enddayTime - todayTime) / (1000 * 60 * 60 * 24));

  const percentage = Math.floor((data.state_num / data.goal_num) * 100);

  return (
    <ProductContainer>
      <ImgContent>
        <img src={data.profileImage_uri} alt={data.title} />
      </ImgContent>
      <InfoContent>
        <InfoTitle>
          <span>{data.title}</span>
        </InfoTitle>
        <InfoDetail>
          <span className="percentage">{`${percentage}%`}</span>
          <span>{`마감 ${D_day}일 전`}</span>
        </InfoDetail>
      </InfoContent>
    </ProductContainer>
  );
};

export default ProductDetail;
