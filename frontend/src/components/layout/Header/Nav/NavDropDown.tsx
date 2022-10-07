/* eslint-disable prettier/prettier */
import { useRef } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaRegHandshake, FaUserCircle } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import styled from "styled-components";

import { removeCookie } from "../../../../config/Cookie";
import { useAppDispatch } from "../../../../hooks/Redux/index";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { loginActions } from "../../../../redux/loginSlice";
import LogoutBtn from "./LogoutBtn";
import NavItem from "./NavItem";

const Container = styled.div`
  position: relative;
`;

const DropDownBtn = styled.button`
  border: 1px solid transparent;
  background: transparent;
  padding: 0;
  margin-left: -0.5em;

  .icon {
    font-size: 30px;
    color: ${props => props.theme.colors.black900};
  }

  .main {
    color: ${props => props.theme.colors.white000};
  }
`;

const MenuBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: -11em;
  top: 2.5em;
  margin-right: 2em;
  background-color: ${props => props.theme.colors.white000};
  border: 1px solid ${props => props.theme.colors.black300};
  border-radius: 4px;
`;

const navs = [
  {
    label: "새 공동구매",
    path: "/new",
    icon: <BsPencilFill />,
    className: "edit",
  },
  { label: "회원정보", path: "/user", icon: <AiOutlineUser /> },
  { label: "참여현황", path: "/participate", icon: <FaRegHandshake /> },
  { label: "관심목록", path: "/favorite", icon: <HiOutlineHeart /> },
];

interface Props {
  className?: string;
}
const NavDropDown = ({ className }: Props) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, btnRef, false);

  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(loginActions.logout());
    removeCookie("userInfo");
    window.location.replace("/");
  };

  const navClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <DropDownBtn ref={btnRef} onClick={navClickHandler}>
        <FaUserCircle className={className} />
      </DropDownBtn>
      {isActive && (
        <MenuBox ref={dropDownRef}>
          {navs.map((el, index) => {
            return (
              <NavItem
                key={index}
                label={el.label}
                path={el.path}
                icon={el.icon}
                className={el.className}
                onClick={navClickHandler}
              />
            );
          })}
          <LogoutBtn
            onClick={() => {
              navClickHandler();
              logoutHandler();
            }}
          />
        </MenuBox>
      )}
    </Container>
  );
};

export default NavDropDown;
