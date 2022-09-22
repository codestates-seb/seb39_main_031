import { useRef } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useOutsideClick } from "../../../../hooks/useOutsideClick";

const Container = styled.div`
  position: relative;
`;

const DropDownBtn = styled.button`
  border: 1px solid transparent;
  background: transparent;
  padding: 0;
  margin-left: -0.5em;

  .icon {
    font-size: 28px;
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
  background-color: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 4px;
`;

const MenuLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2.5em;
  height: 50px;

  .icon {
    margin-right: 10px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &.edit {
    border-bottom: 1px solid ${(props) => props.theme.colors.black200};
  }

  &.logout {
    border-top: 1px solid ${(props) => props.theme.colors.black200};
  }
`;

const NavDropDown = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, btnRef, false);

  const onClickNavBtn = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <DropDownBtn ref={btnRef} onClick={onClickNavBtn}>
        <AiOutlineUser className="icon" />
      </DropDownBtn>
      {isActive && (
        <MenuBox ref={dropDownRef}>
          <MenuLink to="/edit" className="edit" onClick={onClickNavBtn}>
            <BsPencilFill className="icon" />새 공동구매
          </MenuLink>
          <MenuLink to="/user" onClick={onClickNavBtn}>
            <AiOutlineUser className="icon" />
            회원정보
          </MenuLink>
          <MenuLink to="/participate" onClick={onClickNavBtn}>
            <FaRegHandshake className="icon" />
            참여현황
          </MenuLink>
          <MenuLink to="/like" onClick={onClickNavBtn}>
            <HiOutlineHeart className="icon" />
            관심목록
          </MenuLink>
          <MenuLink to="/" className="logout" onClick={onClickNavBtn}>
            <FiLogOut className="icon" />
            로그아웃
          </MenuLink>
        </MenuBox>
      )}
    </Container>
  );
};

export default NavDropDown;
