import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 1em;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    padding: 0;
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.size15};
  color: ${(props) => props.theme.colors.black400};
  margin-bottom: 0.5em;
`;

const ListBox = styled.ul`
  width: 100%;
  padding: 0;
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  text-align: center;
  color: ${(props) => props.theme.colors.black900};
  border-top: 1px solid ${(props) => props.theme.colors.black200};

  &.title {
    font-weight: 900;
    border-top: 1px solid ${(props) => props.theme.colors.black300};
    border-bottom: 1px solid ${(props) => props.theme.colors.black300};
  }

  &.total {
    font-weight: 900;
    border-top: 1px solid ${(props) => props.theme.colors.black300};
  }

  & > .name {
    flex: 1;
  }

  & > .quantity {
    flex: 1;
  }

  & > .price {
    flex: 1;
  }
`;

const data = [
  { user_name: "김유저", num: 1, price: 50000 },
  { user_name: "박유저", num: 1, price: 50000 },
];

const ParticipantList = () => {
  return (
    <Container>
      <Title>참여자 정보</Title>
      <ListBox>
        <List className="title">
          <div className="name">닉네임</div>
          <div className="quantity">수량</div>
          <div className="price">금액</div>
        </List>
        {data.map((el, index) => {
          return (
            <List key={index}>
              <div className="name">{el.user_name}</div>
              <div className="quantity">{el.num}</div>
              <div className="price">{el.price}</div>
            </List>
          );
        })}
        <List className="total">
          <div className="name" />
          <div className="quantity">2</div>
          <div className="price">100000</div>
        </List>
      </ListBox>
    </Container>
  );
};

export default ParticipantList;
