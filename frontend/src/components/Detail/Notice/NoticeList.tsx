import styled from "styled-components";

import NoticeItem from "./NoticeItem";

const Container = styled.div`
  margin: 1em 0 5em 0;
  border: 1px solid ${(props) => props.theme.colors.black200};
`;

const data = [
  {
    notice_id: 3,
    title: "공지3",
    body: "내용3",
    generated_time: "2023-09-27",
  },
  { notice_id: 2, title: "공지2", body: "내용2", generated_time: "2023-09-25" },
  { notice_id: 1, title: "공지1", body: "내용1", generated_time: "2023-09-23" },
];

const NoticeList = () => {
  return (
    <Container>
      {data.map((el) => {
        return (
          <NoticeItem
            key={el.notice_id}
            title={el.title}
            body={el.body}
            generated_time={el.generated_time}
          />
        );
      })}
    </Container>
  );
};

export default NoticeList;
