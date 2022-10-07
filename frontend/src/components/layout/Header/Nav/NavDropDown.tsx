/* eslint-disable prettier/prettier */
import { useRef } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaRegHandshake, FaUserCircle } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import styled from "styled-components";

import { useAppDispatch } from "../../../../hooks/Redux/index";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { openModal } from "../../../../redux/modalSlice";
import { Image } from "../../../../types/post";
import LogoutBtn from "./LogoutBtn";
import NavItem from "./NavItem";

const Container = styled.div`
  position: relative;
`;

const ProfileImage = styled.div<Image>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.cyan400};
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const DropDownBtn = styled.button`
  border: 1px solid transparent;
  background: transparent;
  padding: 0;

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
  z-index: 999;
`;

const navs = [
  {
    label: "새 공동구매",
    path: "/new",
    icon: <BsPencilFill />,
    className: "edit",
  },
  { label: "회원정보", path: "/user", icon: <AiOutlineUser /> },
  { label: "참여현황", path: "/current", icon: <FaRegHandshake /> },
  { label: "관심목록", path: "/favorite", icon: <HiOutlineHeart /> },
];

interface Props {
  className?: string;
}
const NavDropDown = ({ className }: Props) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, btnRef, false);

  //임시 프로필 이미지
  const image_uri = "https://source.unsplash.com/80x80/?cat";

  const dispatch = useAppDispatch();

  const logoutModalHandler = () => {
    dispatch(openModal({ modalType: "logoutModal", isVisible: true }));
  };

  const navClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <DropDownBtn ref={btnRef} onClick={navClickHandler}>
        {image_uri ? (
          <ProfileImage image={image_uri} />
        ) : (
          <FaUserCircle className={className} />
        )}
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
              logoutModalHandler();
            }}
          />
        </MenuBox>
      )}
    </Container>
  );
};

export default NavDropDown;
