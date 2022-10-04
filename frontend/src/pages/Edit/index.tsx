import { useLocation } from "react-router-dom";
import styled from "styled-components";

import EditForm from "../../components/Edit/EditForm";
import { EditType } from "../../types/post";

const PageContainer = styled.div`
  width: 100%;
  padding: 90px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewProductContainer = styled.div`
  width: 45%;
  padding: 34px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
  margin: 0 auto;
`;

const PageTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const Edit = () => {
  //TODO: pages/Detail/Publisher에서 데이터 넘어옴 서버 연결되면 수정
  const location = useLocation();

  const state = location.state as EditType;
  const {
    user_id,
    product_id,
    title,
    category,
    image_uri,
    goal_num,
    generated_time,
    ended_time,
    region,
    town,
    body,
  } = state;

  return (
    <PageContainer>
      <NewProductContainer>
        <PageTitle>
          <h1>공동구매 수정</h1>
        </PageTitle>
        <EditForm
          user_id={user_id}
          product_id={product_id}
          title={title}
          image_uri={image_uri}
          category={category}
          goal_num={goal_num}
          generated_time={generated_time}
          ended_time={ended_time}
          region={region}
          town={town}
          body={body}
        />
      </NewProductContainer>
    </PageContainer>
  );
};

export default Edit;
