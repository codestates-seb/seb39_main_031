import { FiLogOut } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2.5em;
  height: 50px;
  border-top: 1px solid ${(props) => props.theme.colors.black200};

  .icon {
    margin-right: 10px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }
`;

interface logout {
  onClick: () => void;
}

//TODO: 로그아웃 함수 -> ./NavDropDown.tsx
const LogoutBtn = ({ onClick }: logout) => {
  return (
    <Button onClick={onClick}>
      <span className="icon">
        <FiLogOut />
      </span>
      로그아웃
    </Button>
  );
};

export default LogoutBtn;
