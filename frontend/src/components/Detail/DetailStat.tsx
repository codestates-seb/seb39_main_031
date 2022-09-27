import styled from "styled-components";

import ProgressBar from "../../common/ProgressBar/ProgressBar";
import { saveRemainDate } from "../../utils/saveRemainDate";

const Block = styled.div`
  margin-bottom: 3em;
  font-size: ${(props) => props.theme.fontSize.size15};
`;

const Title = styled.div`
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
    <>
      <Block>
        <Title>남은시간</Title>
        {remainTime}
      </Block>
      <Block>
        <Title>목표수량</Title>
        <Contents>
          <span className="strong">{state_num}</span> 개 /
          <span className="strong"> {goal_num}</span> 개
        </Contents>
        <ProgressBar state_num={state_num} goal_num={goal_num} />
      </Block>
      <Block>
        <Title>분담금액</Title>
        <Contents>
          <span className="strong">
            {(goal_price / goal_num).toLocaleString()}
          </span>{" "}
          원
        </Contents>
      </Block>
      <Block>
        <TotalInfo>
          <div className="title">총 금액</div>
          <div>{goal_price.toLocaleString()}</div>
        </TotalInfo>
        <TotalInfo>
          <div className="title">기간</div>
          <div>
            {generatedDate} ~ {endedDate}
          </div>
        </TotalInfo>
      </Block>
    </>
  );
};

export default DetailStats;
