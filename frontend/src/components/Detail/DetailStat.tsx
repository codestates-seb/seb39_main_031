import styled from "styled-components";

import ProgressBar from "../../common/ProgressBar/ProgressBar";
import { saveRemainDate } from "../../utils/saveRemainDate";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  margin-bottom: 3em;
  font-size: ${(props) => props.theme.fontSize.size15};
`;

const Title = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.black400};
`;

const Contents = styled.div`
  padding: 0.5em 0;

  .strong {
    font-size: ${(props) => props.theme.fontSize.size32};
  }
`;

const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;

  .title {
    font-weight: 700;
  }
`;

interface Props {
  ended_time: string;
  goal_num: number;
  state_num: number;
  state_price: number;
  goal_price: number;
  generated_time: string;
}

const DetailStats = ({
  ended_time,
  goal_num,
  state_num,
  state_price,
  goal_price,
  generated_time,
}: Props) => {
  const generatedDate = new Date(+new Date(generated_time) + 3240 * 10000)
    .toISOString()
    .split("T")[0];

  const endedDate = new Date(+new Date(ended_time) + 3240 * 10000)
    .toISOString()
    .split("T")[0];

  let remainTime;
  const [type, time] = saveRemainDate(ended_time);
  if (type === "end") {
    remainTime = (
      <Contents>
        <span className="strong">{time}</span>
      </Contents>
    );
  }
  if (type === "time") {
    remainTime = (
      <Contents>
        <span className="strong">{time}</span> 시간
      </Contents>
    );
  }
  if (type === "day") {
    remainTime = (
      <Contents>
        <span className="strong">{time}</span> 일
      </Contents>
    );
  }

  return (
    <Container>
      <SubInfo>
        <Block>
          <Title>남은 시간</Title>
          {remainTime}
        </Block>
        <Block>
          <Title>목표 수량</Title>
          <Contents>
            <span className="strong">{state_num}</span> 개 /
            <span className="strong"> {goal_num}</span> 개
          </Contents>
          <ProgressBar state_num={state_num} goal_num={goal_num} />
        </Block>
        <Block>
          <Title>단위 가격</Title>
          <Contents>
            <span className="strong">
              {/*TODO: 단위 가격으로 수정 필요 */}
              {(goal_price / goal_num).toLocaleString()}
            </span>{" "}
            원
          </Contents>
        </Block>
      </SubInfo>
      <Block>
        <TotalInfo>
          <div className="title">총 금액</div>
          {/*TODO: 단위 가격 * goal_num 수정 필요 */}
          <div>{goal_price.toLocaleString()}</div>
        </TotalInfo>
        <TotalInfo>
          <div className="title">기간</div>
          <div>
            {generatedDate} ~ {endedDate}
          </div>
        </TotalInfo>
      </Block>
    </Container>
  );
};

export default DetailStats;
