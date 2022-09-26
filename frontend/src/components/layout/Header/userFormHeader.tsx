/* eslint-disable prettier/prettier */
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector } from "../../../hooks/Redux";
import Notification from "../../Notification";
import NavDropDown from "./Nav/NavDropDown";
import SearchInput from "./Search/SearchInput";

export const HeaderBox = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  width: 30%;
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  font-size: ${props => {
    return props.theme.fontSize.size24;
  }};
  font-weight: 700;
`;

export const MenuBox = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  column-gap: 30px;
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => {
    return props.theme.fontSize.size20;
  }};

  &:hover {
    color: ${props => {
      return props.theme.colors.black400;
    }};
    transition: color 0.3s;
  }

  &.active {
    font-weight: 700;
    color: ${props => {
      return props.theme.colors.cyan700;
    }};
    transition: color 0.3s;
  }
`;

export const RightBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16%;
  column-gap: 30px;
  margin: 0 10px;

  .icon {
    font-size: 25px;
  }
`;

const UserFormHeader = () => {
  //TODO: 임시 로그인 상태 변수
  const isLogin = useAppSelector(state => state.login.isLogin);
  const location = useLocation();

  return (
    <HeaderBox>
      <LeftBox>
        <Logo>
          <Link to="/">👍여기붙어라</Link>
        </Logo>
        <MenuBox>
          <MenuLink to="/groupbuying">공동구매</MenuLink>
          <MenuLink to="/category">카테고리</MenuLink>
        </MenuBox>
      </LeftBox>
      <SearchInput
        path={location.pathname}
        placeholder="검색어를 입력하세요."
        width="32%"
      />
      {isLogin ? (
        <RightBox>
          <Notification />
          <Link to="/chat">
            <IoChatbubbleEllipsesOutline className="icon" />
          </Link>
          <NavDropDown />
        </RightBox>
      ) : (
        <RightBox>
          <MenuLink to="/login"> 로그인 </MenuLink>
          <MenuLink to="/signup"> 회원가입 </MenuLink>
        </RightBox>
      )}
    </HeaderBox>
  );
};

export default UserFormHeader;
