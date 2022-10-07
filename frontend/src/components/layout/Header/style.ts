import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.header`
  width: 100%;
`;

export const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 1em 3em;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Logo = styled.div`
  display: flex;
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
  display: none;
  column-gap: 10px;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    display: flex;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin-left: 2em;
  }
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  width: 100px;

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

  &.iconBox {
    column-gap: 20px;
  }

  .icon {
    font-size: 28px;
    color: ${(props) => props.theme.colors.black900};
  }

  .main {
    color: ${(props) => props.theme.colors.white000};
  }
`;
