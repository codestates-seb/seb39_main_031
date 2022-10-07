import styled from "styled-components";

const Container = styled.div`
  margin: 4em 0;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const ImageBox = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #ffff1c 0%, #00c3ff 100%);
`;

const ProfileImage = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border: 0.2em solid ${(props) => props.theme.colors.black200};
  border-radius: 50%;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.size24};
  font-weight: 900;
`;

const UserInfo = () => {
  return (
    <Container>
      <InfoBox>
        <ImageBox>
          <ProfileImage
            src="https://avatars.githubusercontent.com/u/102649010?s=400&u=fcd429233851c39c268065b3954d367554f725d3&v=4"
            alt="profile"
          />
        </ImageBox>
        <NameBox>김유저</NameBox>
      </InfoBox>
    </Container>
  );
};

export default UserInfo;
