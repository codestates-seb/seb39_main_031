import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import Notification from "../../Notification";
import NavDropDown from "./Nav/NavDropDown";
import MainInput from "./Search/MainInput";
import SearchInput from "./Search/SearchInput";
import * as S from "./style";

const Header = () => {
  //TODO: 임시 로그인 상태 변수
  const isLogin = true;
  const location = useLocation();

  return (
    <S.Container>
      <S.HeaderBox>
        <S.LeftBox>
          <S.Logo>
            <Link to="/">👍여기붙어라</Link>
          </S.Logo>
          <S.MenuBox>
            <S.MenuLink to="/groupbuying">공동구매</S.MenuLink>
            <S.MenuLink to="/category">카테고리</S.MenuLink>
          </S.MenuBox>
        </S.LeftBox>
        <SearchInput
          path={location.pathname}
          placeholder="검색어를 입력하세요."
          width="32%"
        />
        {isLogin ? (
          <S.RightBox>
            <Notification />
            <Link to="/chat">
              <IoChatbubbleEllipsesOutline className="icon" />
            </Link>
            <NavDropDown />
          </S.RightBox>
        ) : (
          <S.RightBox>
            <S.MenuLink to="/login"> 로그인 </S.MenuLink>
            <S.MenuLink to="/signup"> 회원가입 </S.MenuLink>
          </S.RightBox>
        )}
      </S.HeaderBox>

      {location.pathname === "/" && <MainInput />}
    </S.Container>
  );
};

export default Header;
