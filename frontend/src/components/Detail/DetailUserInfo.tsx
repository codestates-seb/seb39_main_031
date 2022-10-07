/* eslint-disable prettier/prettier */
import { AiFillHome, AiFillStar } from "react-icons/ai";
import styled from "styled-components";

import { Image } from "../../types/post";

const Container = styled.div`
  margin-top: 4em;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSize.size15};
  color: ${props => props.theme.colors.black400};
  margin-bottom: 0.5em;
`;

const InfoBlock = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.black400};
  padding: 1em;
  border-radius: 4px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.size20};
  font-weight: 900;
  margin-bottom: 1em;
`;

const ImageBox = styled.div<Image>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.size15};
  margin-bottom: 0.5em;

  .icon {
    font-size: ${props => props.theme.fontSize.size15};
    color: ${props => props.theme.colors.cyan500};
    margin-right: 5px;
  }
`;

interface Props {
  profileImage_uri: string;
  user_name: string;
  town: string;
  score: number;
}

const DetailUserInfo = ({
  profileImage_uri,
  user_name,
  town,
  score,
}: Props) => {
  return (
    <Container>
      <Title>게시자 정보</Title>
      <InfoBlock>
        <User>
          <ImageBox image={profileImage_uri} />
          {user_name}
        </User>
        <Info>
          <AiFillHome className="icon" />
          {town}
        </Info>
        <Info>
          <AiFillStar className="icon" />
          {/* 만족도 {score.toFixed(1)} */}
        </Info>
      </InfoBlock>
    </Container>
  );
};

export default DetailUserInfo;
