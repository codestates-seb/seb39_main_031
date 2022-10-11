import styled from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { endModal, notjoinModal, ratingModal } from "../../redux/modalSlice";
import { Image } from "../../types/post";
import { saveRemainDate } from "../../utils/saveRemainDate";
import CancelButton from "./CancelButton";
import EndButton from "./EndButton";
import RatingButton from "./RatingButton";

const Container = styled.section`
  display: flex;
  column-gap: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black300};
  padding: 1.5em;
`;

const ImageBox = styled.div<Image>`
  width: 150px;
  height: 100px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 80%;
  }
`;

const Date = styled.div`
  font-size: 15px;

  .end {
    color: ${(props) => props.theme.colors.red700};
  }
`;

const Title = styled.header`
  font-size: 20px;
  font-weight: 700;
`;

const UserInfo = styled.div`
  display: flex;
  font-size: 15px;
  color: ${(props) => props.theme.colors.black500};
  column-gap: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: flex-end;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
  }
`;

interface Props {
  image_uri: string;
  ended_time: string;
  title?: string;
  category?: string;
  user_name?: string;
  town?: string;
  status: string;
  state_price: number;
  quantity: number;
}

const CurrentItem = ({
  image_uri,
  ended_time,
  title,
  category,
  user_name,
  town,
  status,
  state_price,
  quantity,
}: Props) => {
  let remainTime;
  const [type, time] = saveRemainDate(ended_time);
  if (type === "end") {
    remainTime = <span className="end">{time}</span>;
  }
  if (type === "time") {
    remainTime = `${time}시간 남음`;
  }
  if (type === "day") {
    remainTime = `${time}일 남음`;
  }

  const dispatch = useAppDispatch();

  const cancelModalHandler = () => {
    console.log("공구 참여 취소 모달");
    dispatch(
      notjoinModal({
        modalType: "notjoinModal",
        isVisible: true,
        props: { image_uri, title, state_price, quantity },
      })
    );
  };

  const endModalHandler = () => {
    console.log("공구 종료 모달");
    dispatch(endModal({ modalType: "endModal", isVisible: true }));
  };

  const ratingModalHandlr = () => {
    console.log("공구 평점 모달");
    dispatch(ratingModal({ modalType: "ratingModal", isVisible: true }));
  };

  return (
    <Container>
      <ImageBox image={image_uri} />
      <SubContainer>
        <InfoBox>
          <Date>{remainTime}</Date>
          <Title>{title}</Title>
          <UserInfo>
            <span>{category} |</span>
            <span>{user_name} ·</span>
            <span>{town}</span>
          </UserInfo>
        </InfoBox>
        <ButtonBox>
          {status === "proceeding" ? (
            <CancelButton onClick={cancelModalHandler} />
          ) : (
            <>
              <RatingButton onClick={ratingModalHandlr} />
              <EndButton onClick={endModalHandler} />
            </>
          )}
        </ButtonBox>
      </SubContainer>
    </Container>
  );
};

export default CurrentItem;
