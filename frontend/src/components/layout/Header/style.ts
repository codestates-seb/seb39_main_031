import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.header`
  width: 100%;
`;

export const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
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
  font-size: ${(props) => {
    return props.theme.fontSize.size24;
  }};
  font-weight: 700;
`;

export const LogoImage = styled.img`
  width: 120px;
`;

export const MenuBox = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  column-gap: 35px;
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 22px;

  &.main {
    color: white !important;

    &:hover {
      color: ${(props) => props.theme.colors.cyan200} !important;
      transition: color 0.3s;
    }
  }

  &:hover {
    color: ${(props) => props.theme.colors.black400};
    transition: color 0.3s;
  }

  &.active {
    color: ${(props) => props.theme.colors.cyan700};
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
    font-size: 28px;
    color: ${(props) => props.theme.colors.black900};
  }

  .main {
    font-size: 30px;
    color: ${(props) => props.theme.colors.white000};
  }
`;
