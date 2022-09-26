import { useParams } from "react-router-dom";

import { DetailData } from "../../mocks/data";
import Participant from "./Participant";

const Detail = () => {
  const { product_id } = useParams();
  const data = DetailData[Number(product_id) - 1];

  return (
    //TODO: 쿠키의 user_id === user_id ? <게시자 페이지 Participant/> : <참여자 페이지 Participant/>

    <>
      <Participant
        user_id={data.user_id}
        user_name={data.user_name}
        score={data.score}
        profileImage_uri={data.profileImage_uri}
        product_id={data.product_id}
        town={data.town}
        goal_num={data.goal_num}
        state_num={data.state_num}
        image_uri={data.image_uri}
        goal_price={data.goal_price}
        state_price={data.state_price}
        title={data.title}
        body={data.body}
        generated_time={data.generated_time}
        ended_time={data.ended_time}
        status={data.status}
      />
    </>
  );
};

export default Detail;
