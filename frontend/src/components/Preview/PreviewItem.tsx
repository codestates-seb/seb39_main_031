import styled from "styled-components";

import ProgressBar from "../../common/ProgressBar/ProgressBar";
import { Image, Preview } from "../../types/post";
import { saveClosingDate } from "../../utils/saveClosingDate";

const Container = styled.div`
  width: 100%;
`;

const ThumbnailBox = styled.div`
  overflow: hidden;
  width: 100%;
  height: 14em;
`;

const Thumbnail = styled.div<Image>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s linear;

  ${ThumbnailBox}:hover & {
    transform: scale(1.1);
  }
`;

const TitleUserBox = styled.div`
  height: 6em;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.black000};
  font-size: ${(props) => props.theme.fontSize.size18};
  margin: 0.5em 0;
  line-height: 1.5em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const UserInfo = styled.div`
  font-size: ${(props) => props.theme.fontSize.size12};
  color: ${(props) => props.theme.colors.black500};
  margin: 0.5em 0;
`;

const GongguInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.black400};
  font-size: ${(props) => props.theme.fontSize.size12};
  margin: 0.5em 0;
  font-weight: 700;
`;

const PreviewItem = ({
  image_uri,
  title,
  user_name,
  town,
  goal_num,
  state_num,
  ended_time,
}: Preview) => {
  return (
    <Container>
      <ThumbnailBox>
        <Thumbnail image={image_uri} />
      </ThumbnailBox>
      <TitleUserBox>
        <Title>{title}</Title>
        <UserInfo>
          {user_name} | {town}
        </UserInfo>
      </TitleUserBox>
      <ProgressBar state_num={state_num} goal_num={goal_num} />
      <GongguInfo>
        <div>
          {state_num} / {goal_num}
        </div>
        <div>{saveClosingDate(ended_time)}</div>
      </GongguInfo>
    </Container>
  );
};

export default PreviewItem;
