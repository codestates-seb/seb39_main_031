import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.header`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

export const HeaderBox = styled.div`
  width: 100%;
  min-width: 480px;
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

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    display: flex;
    column-gap: 1em;
    margin-left: 1em;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    column-gap: 1.5rem;
    margin-left: 2em;
  }
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
  column-gap: 1em;

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

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    column-gap: 1.5rem;
  }
`;
