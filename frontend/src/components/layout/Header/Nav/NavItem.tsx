import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

interface Props {
  label: string;
  path: string;
  icon: JSX.Element;
  className?: string;
  onClick: () => void;
}

const NavItem = ({ label, path, icon, className }: Props) => {
  return (
    <>
      <MenuLink to={path} className={className}>
        <span className="icon">{icon}</span> {label}
      </MenuLink>
    </>
  );
};

export default NavItem;
