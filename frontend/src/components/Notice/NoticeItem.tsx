import styled from "styled-components";

import NoticeDropDown from "./NoticeDropDown";

const Container = styled.section``;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.black200};
  padding: 1em 0.5em 1em 1em;
`;

const Title = styled.div`
  width: 20em;
  font-size: ${(props) => props.theme.fontSize.size18};
  font-weight: 700;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-around;
  width: 7em;
  .date {
    font-size: ${(props) => props.theme.fontSize.size15};
  }
`;

const Content = styled.div`
  padding: 2em;
`;

interface Props {
  title: string;
  body: string;
  generated_time: string;
}

const NoticeItem = ({ title, body, generated_time }: Props) => {
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

export default NoticeItem;
