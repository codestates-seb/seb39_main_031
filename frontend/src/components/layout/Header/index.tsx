/* eslint-disable prettier/prettier */
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/Image/logo2.png";
import logoW from "../../../assets/Image/logo2-w.png";
import { useAppSelector } from "../../../hooks/Redux";
import Notification from "../../Notification";
import NavDropDown from "./Nav/NavDropDown";
import MainInput from "./Search/MainInput";
import SearchInput from "./Search/SearchInput";
import * as S from "./style";

const Header = () => {
  //TODO: 임시 로그인 상태 변수
  const isLogin = useAppSelector((state) => state.login.isLogin);
  const location = useLocation();

  return (
    <S.Container>
      {location.pathname === "/" ? (
        <>
          <S.HeaderBox>
            <S.LeftBox>
              <S.Logo>
                <Link to="/">
                  <S.LogoImage src={logoW} />
                </Link>
              </S.Logo>
              <S.MenuBox>
                <S.MenuLink className="main" to="/groupbuying">
                  공동구매
                </S.MenuLink>
                <S.MenuLink className="main" to="/category">
                  카테고리
                </S.MenuLink>
              </S.MenuBox>
            </S.LeftBox>
            <SearchInput
              path={location.pathname}
              placeholder="검색어를 입력하세요."
              width="32%"
            />
            {isLogin ? (
              <S.RightBox>
                <Notification className="icon main" />
                <Link to="/chat">
                  <IoChatbubbleEllipsesSharp className="icon main" />
                </Link>
                <NavDropDown className="icon main" />
              </S.RightBox>
            ) : (
              <S.RightBox>
                <S.MenuLink className="main" to="/login">
                  로그인
                </S.MenuLink>
                <S.MenuLink className="main" to="/signup">
                  회원가입
                </S.MenuLink>
              </S.RightBox>
            )}
          </S.HeaderBox>
          <MainInput />
        </>
      ) : (
        <S.HeaderBox>
          <S.LeftBox>
            <S.Logo>
              <Link to="/">
                <S.LogoImage src={logo} />
              </Link>
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
              <Notification className="icon" />
              <Link to="/chat">
                <IoChatbubbleEllipsesSharp className="icon" />
              </Link>
              <NavDropDown className="icon" />
            </S.RightBox>
          ) : (
            <S.RightBox>
              <S.MenuLink to="/login"> 로그인 </S.MenuLink>
              <S.MenuLink to="/signup"> 회원가입 </S.MenuLink>
            </S.RightBox>
          )}
        </S.HeaderBox>
      )}
    </S.Container>
  );
};

export default Header;
