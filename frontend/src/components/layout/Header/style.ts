import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
`;

export const HeaderBox = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
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
  font-size: ${(props) => {
    return props.theme.fontSize.size20;
  }};

  &:hover {
    color: ${(props) => {
      return props.theme.colors.black400;
    }};
    transition: color 0.3s;
  }

  &.active {
    font-weight: 700;
    color: ${(props) => {
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
