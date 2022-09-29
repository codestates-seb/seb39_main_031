import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import { Image } from "../../types/post";

const Container = styled.div`
  margin: 4em 0;
`;

const InfoBox = styled.div`
  display: flex;
`;

const ImageBox = styled.div<Image>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3px;

  .name {
    font-size: ${(props) => props.theme.fontSize.size24};
    font-weight: 900;
  }
`;

const ModifyButton = styled(Button)`
  width: 100%;
  padding: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.cyan600};
  font-size: ${(props) => props.theme.fontSize.size15};

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.red600};
  }
`;

const UserInfo = () => {
  return (
    <Container>
      <InfoBox>
        <ImageBox
          image={
            "https://avatars.githubusercontent.com/u/102649010?s=400&u=fcd429233851c39c268065b3954d367554f725d3&v=4"
          }
        />
        <NameBox>
          <div className="name">김유저</div>
          <ModifyButton>회원정보 수정</ModifyButton>
        </NameBox>
      </InfoBox>
    </Container>
  );
};

export default UserInfo;
