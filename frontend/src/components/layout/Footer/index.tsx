/* eslint-disable prettier/prettier */
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme.colors.black900};
  color: ${props => props.theme.colors.white000};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translateY(-100%);
`;

const LinkBox = styled.div`
  .icon {
    font-size: 25px;
    margin-left: 0.5em;
    color: ${props => props.theme.colors.white000};
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>Codestates 39th Team 31</div>
      <LinkBox>
        <a
          href="https://github.com/codestates-seb/seb39_main_031"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="icon github" />
        </a>
        <a
          href="https://www.notion.so/codestates/Main-Project-7b36225b7af244e78ee0142780f245f8"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion className="icon" />
        </a>
      </LinkBox>
    </Container>
  );
};

export default Footer;
