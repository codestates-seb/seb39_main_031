import styled from "styled-components";

import NoticeDropDown from "./NoticeDropDown";

const Container = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.colors.black200};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.white000};
  border-bottom: 0.5px solid ${(props) => props.theme.colors.black200};
  padding: 1.5em 0.5em 1.5em 1em;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-around;
  width: 7em;
  .date {
    color: ${(props) => props.theme.colors.black500};
    font-size: ${(props) => props.theme.fontSize.size15};
  }
`;

const Content = styled.div`
  font-size: 17px;
  padding: 3em 2em;
`;

interface Props {
  title: string;
  body: string;
  generated_time: string;
}

//TODO: 게시자 공지 Item
export const NoticeItem = ({ title, body, generated_time }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Block>
          <div className="date">{generated_time}</div>
          <div>
            <NoticeDropDown />
          </div>
        </Block>
      </Header>
      <Content>{body}</Content>
    </Container>
  );
};

//TODO: 참가자 공지 Item
export const ParticipantNoticeItem = ({
  title,
  body,
  generated_time,
}: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Block>
          <div className="date">{generated_time}</div>
        </Block>
      </Header>
      <Content>{body}</Content>
    </Container>
  );
};
