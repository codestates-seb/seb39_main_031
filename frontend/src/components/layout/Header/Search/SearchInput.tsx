import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const InputTagBox = styled.div<InputProps>`
  display: none;
  width: 50%;
  min-width: 150px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;

  .icon {
    font-size: 20px;
    color: ${(props) => {
      return props.theme.colors.black400;
    }};
    position: absolute;
    right: auto;
    left: 0.7em;
    top: 47%;
    margin-top: -9px;
    pointer-events: none;
  }

  .disable {
    display: none;
  }

  &.header {
    @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
      display: flex;
      width: 40%;
    }
  }

  &.main {
    display: flex;
  }
`;

const InputTag = styled.input<InputProps>`
  width: 100%;
  height: 50px;
  padding: 8px;
  padding-left: 40px;
  border: 3px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#EEEEEE")};
  border-radius: 30px;
  font-size: ${(props) => props.theme.fontSize.size15};

  &::placeholder {
    color: ${(props) => props.theme.colors.black400};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => {
      return props.theme.colors.cyan200;
    }};
  }

  &.disable {
    display: none;
  }
`;

interface InputProps {
  placeholder?: string;
  path?: string;
  width?: string;
  borderColor?: string;
  className?: string;
}

const SearchInput = ({
  placeholder,
  path,
  width,
  borderColor,
  className,
}: InputProps) => {
  return (
    <InputTagBox width={width} className={className}>
      <InputTag
        className={path === "/" ? "disable" : ""}
        placeholder={placeholder}
        borderColor={borderColor}
      />
      <BiSearch className={path === "/" ? "disable" : "icon"} />
    </InputTagBox>
  );
};

export default SearchInput;
