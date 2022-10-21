/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProgressBar from "../../common/ProgressBar/ProgressBar";
import { Preview } from "../../types/post";
import { saveClosingDate } from "../../utils/saveClosingDate";

const Container = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  column-gap: 10px;
  cursor: pointer;

  > a {
    display: block;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    flex-direction: column;
  }
`;

const ThumbnailBox = styled.div`
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.black200};
  width: 30%;
  min-width: 10rem;
  height: 8rem;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 100%;
    height: 14rem;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  ${ThumbnailBox}:hover & {
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.div`
  width: 100%;
`;

const TitleUserBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  height: 5rem;
`;

const Title = styled.header`
  color: ${(props) => props.theme.colors.black000};
  font-size: ${(props) => props.theme.fontSize.size18};
  font-weight: 700;
  line-height: 1.5em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const UserInfo = styled.div`
  font-size: ${(props) => props.theme.fontSize.size12};
  color: ${(props) => props.theme.colors.black500};
`;

const GongguInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.black400};
  font-size: 13px;
  margin: 0.5em 0;
  font-weight: 700;
  text-align: center;
`;

const PercentageBox = styled.div`
  display: flex;
  column-gap: 5px;

  .percentage {
    font-size: 15px;
    color: ${(props) => props.theme.colors.cyan400};
  }
`;

const PreviewItem = ({
  product_id,
  image_uri,
  title,
  user_name,
  user_id,
  town,
  goal_num,
  state_num,
  ended_time,
  ...props
}: Preview) => {
  const onClickHandler = () => {
    console.log(user_id, product_id);
  };
  return (
    <Link to={`/${user_id}/${product_id}`}>
      <Container onClick={onClickHandler}>
        <ThumbnailBox>
          <Thumbnail src={image_uri} alt={title} />
        </ThumbnailBox>
        <ProductInfo>
          <TitleUserBox>
            <Title>{title}</Title>
            <UserInfo>
              {user_name} | {town}
            </UserInfo>
          </TitleUserBox>
          <ProgressBar state_num={state_num} goal_num={goal_num} />
          <GongguInfo>
            <PercentageBox>
              <div className="percentage">{`${Math.ceil(
                (state_num / goal_num) * 100
              )}%`}</div>
              <div>
                {state_num} / {goal_num}
              </div>
            </PercentageBox>
            <div>{saveClosingDate(ended_time)}</div>
          </GongguInfo>
        </ProductInfo>
      </Container>
    </Link>
  );
};

export default PreviewItem;
